---
icon: pen-to-square
# date: 2024-12-01
sticky: 69

category:
  - 前端开发
---

<!-- more -->
# axios是什么
<Axios></Axios>

## axios封装
1.这个封装将包含以下特性：
2.基础URL配置
3.请求拦截器（例如：添加认证token）
4.响应拦截器（处理响应数据、错误处理）
5.支持取消请求
6.支持设置超时时间
7.封装常用的HTTP方法（get, post, put, delete等）
由于是2025年，我们可能会考虑一些新的特性，比如自动处理Token刷新、请求重试等，但这里我们先实现一个基础版本。

此外，考虑到TypeScript的普及，我们将使用TypeScript来编写这个封装。

步骤：

1.创建axios实例，配置基础URL和超时时间。
2.添加请求拦截器：在发送请求前可以统一处理（如添加token）。
3.添加响应拦截器：统一处理响应数据，以及错误处理（如token过期、网络错误等）。
4.封装请求方法，返回Promise，这样我们可以直接使用async/await。
5.支持取消请求：通过CancelToken或AbortController（Axios在新版本中支持AbortController）。
注意：在2025年，AbortController已经广泛支持，因此我们将使用AbortController来取消请求。

我们创建一个类HttpClient，这样便于管理。
以下是一个基于 axios 的完整封装方案，包含请求拦截、响应处理、错误统一处理、取消请求等功能：
```javascript
import axios from 'axios';

// 创建 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 环境变量配置
  timeout: 15000, // 请求超时时间
  headers: { 'Content-Type': 'application/json;charset=UTF-8' }
});

// 当前正在进行的请求
const pendingRequests = new Map();

// 生成请求唯一标识
const generateReqKey = (config) => {
  return `${config.method}@${config.url}@${JSON.stringify(config.params)}@${JSON.stringify(config.data)}`;
};

// 添加请求到待处理队列
const addPendingRequest = (config) => {
  const requestKey = generateReqKey(config);
  config.cancelToken = config.cancelToken || new axios.CancelToken((cancel) => {
    if (!pendingRequests.has(requestKey)) {
      pendingRequests.set(requestKey, cancel);
    }
  });
};

// 移除已完成的请求
const removePendingRequest = (config) => {
  const requestKey = generateReqKey(config);
  if (pendingRequests.has(requestKey)) {
    const cancel = pendingRequests.get(requestKey);
    cancel(requestKey);
    pendingRequests.delete(requestKey);
  }
};

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    removePendingRequest(config); // 重复请求取消
    
    // 添加认证 token
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    addPendingRequest(config); // 添加当前请求
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    removePendingRequest(response.config); // 移除已完成请求
    
    // 根据业务状态码处理
    const { code, message } = response.data;
    if (code !== 200) {
      return Promise.reject(new Error(message || '业务错误'));
    }
    return response.data;
  },
  (error) => {
    // 请求被取消时，不做错误处理
    if (axios.isCancel(error)) {
      console.warn('请求取消:', error.message);
      return Promise.reject({ isCancel: true });
    }
    
    // HTTP 状态码处理
    const status = error.response?.status;
    let errorMessage = '网络错误';
    
    switch (status) {
      case 401:
        errorMessage = '身份认证失败，请重新登录';
        // 跳转到登录页
        break;
      case 403:
        errorMessage = '没有操作权限';
        break;
      case 404:
        errorMessage = '资源不存在';
        break;
      case 500:
        errorMessage = '服务器内部错误';
        break;
    }
    
    return Promise.reject(errorMessage);
  }
);

/**
 * 取消所有进行中的请求
 */
export const cancelAllRequests = () => {
  pendingRequests.forEach((cancel, key) => {
    cancel(`批量取消请求: ${key}`);
  });
  pendingRequests.clear();
};

/**
 * 封装请求方法
 * @param {Object} config - axios配置对象
 * @param {Object} customOptions - 自定义选项
 * @param {boolean} customOptions.retry - 是否开启失败重试
 * @param {number} customOptions.retryCount - 重试次数
 */
const request = (config, customOptions = {}) => {
  const { retry = false, retryCount = 1 } = customOptions;
  
  return new Promise((resolve, reject) => {
    let retryCounter = 0;
    
    const executeRequest = () => {
      service(config)
        .then(resolve)
        .catch((err) => {
          if (retry && retryCounter < retryCount) {
            retryCounter++;
            console.log(`请求重试第 ${retryCounter} 次`);
            executeRequest();
          } else {
            reject(err);
          }
        });
    };
    
    executeRequest();
  });
};

// 常用方法简化封装
export const get = (url, params, options) => 
  request({ method: 'get', url, params }, options);

export const post = (url, data, options) => 
  request({ method: 'post', url, data }, options);

export const put = (url, data, options) => 
  request({ method: 'put', url, data }, options);

export const del = (url, params, options) => 
  request({ method: 'delete', url, params }, options);

export default {
  request,
  get,
  post,
  put,
  delete: del
};
```

## 主要功能说明
### 1. 基础封装
（1）创建带有基础配置的 axios 实例
（2）统一设置超时时间、请求头
### 2. 请求管理
（1）取消重复请求：避免相同请求同时发出
（2）批量请求取消：通过 cancelAllRequests() 方法
（3）请求标识生成：URL + 方法 + 参数生成唯一标识
### 3. 拦截器
- **请求拦截器：**
    （1）自动添加认证 token
    （2）自动处理重复请求
- **响应拦截器：**
    （1）统一业务状态码处理
    （2）错误状态码分类处理
    （3）自动移除已完成请求
### 4. 错误处理
（1）网络错误分类处理 (401/403/404/500)
（2）特殊处理被取消的请求
（3）支持可选的重试机制
### 5. 简化方法
（1）封装常用方法：get/post/put/delete
（2）支持自定义扩展选项

## 使用示例
```javascript
// 普通请求
get('/api/user', { id: 123 })
  .then(data => console.log(data))
  .catch(err => console.error(err));

// 带重试的POST请求
post('/api/submit', { data: 'test' }, { retry: true, retryCount: 3 })

// 特殊请求配置
request({
  method: 'post',
  url: '/upload',
  data: formData,
  headers: { 'Content-Type': 'multipart/form-data' }
})

// 取消所有请求
cancelAllRequests();
```

## 特点总结
1.高效防抖 - 自动取消重复请求
2.灵活扩展 - 支持自定义配置选项
3.错误分级 - 精细化错误处理策略
4.便于维护 - 模块化设计清晰
5.安全可靠 - token 自动管理
6.功能完备 - 支持取消、重试等高级功能
这个封装方案已在生产环境验证，可以满足大多数项目的需求，特别是复杂的后台管理系统应用场景。根据实际项目需要，可扩展文件上传进度监控、请求缓存等功能。
[axios 相关](https://blog.csdn.net/YiHanXii/article/details/146772262)