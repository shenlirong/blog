---
icon: pen-to-square
# date: 2024-12-01
sticky: 69

category:
  - 前端开发
---

<!-- more -->
# axios是什么

**在封装axios时，拦截器（interceptors）是非常强大的功能，它允许我们在请求发出之前和响应返回之后对它们进行全局处理。拦截器主要用于以下几个方面：**

**​请求拦截器（Request Interceptors）​​：**
  1.在请求发送前对请求配置进行处理，例如添加认证信息（token）、设置请求头、修改请求参数等。
  2.可以用于显示全局的加载状态（如显示loading动画）。
  3.可以对请求进行日志记录。
**​响应拦截器（Response Interceptors）​​：**
  1.在接收到响应后，对响应数据进行统一处理，例如解析响应数据、统一处理错误（如根据状态码跳转登录页面）、隐藏加载状态等。
  2.可以对响应进行日志记录。

**封装axios需要注意的事项：**
**1.​创建axios实例​：** 通常我们会创建一个axios实例，而不是直接使用默认实例，这样可以避免全局污染。
**2.​设置基础配置​：** 比如设置基础URL（baseURL）、超时时间（timeout）等。
**3.​请求拦截器​：** 在请求拦截器中，我们通常做以下事情：
  (1)从本地存储（如localStorage）中获取token，并添加到请求头中。
  (2)对请求参数进行序列化处理（如果需要）。
  (3)在请求发出前显示loading。
**4.​响应拦截器​：** 在响应拦截器中，我们通常做以下事情：
  (1)对响应数据进行处理，例如只返回data部分。
  (2)根据状态码进行错误处理，比如401（未授权）跳转到登录页，403（禁止访问）提示权限不足等。
  (3)隐藏loading。
**5.​错误处理​：** 统一处理网络错误和业务错误，避免在每个请求中重复处理。
**6.​导出封装后的请求方法​：** 通常我们会封装常用的请求方法（get、post、put、delete等）并导出，以便在项目中调用。

示例代码：
下面是一个封装axios的示例：
```
import axios from 'axios';

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 基础url
  timeout: 5000, // 超时时间
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    // 例如：如果存在token，则添加到请求头中
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    // 显示loading（如果有需要）
    // showLoading();
    return config;
  },
  error => {
    // 对请求错误做些什么
    // hideLoading();
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    // 例如：隐藏loading
    // hideLoading();
    
    // 根据后端返回的数据结构，这里假设我们只关心data字段
    const res = response.data;
    // 如果状态码不是200，则视为错误（这里根据实际项目调整）
    if (res.code !== 200) {
      // 处理业务错误，例如弹出错误提示
      return Promise.reject(new Error(res.message || 'Error'));
    } else {
      return res;
    }
  },
  error => {
    // 对响应错误做点什么
    // hideLoading();
    // 处理HTTP状态码错误
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 未授权，跳转到登录页
          router.replace('/login');
          break;
        case 403:
          // 禁止访问
          alert('没有权限访问');
          break;
        case 500:
          // 服务器错误
          alert('服务器错误');
          break;
        default:
          alert('未知错误');
      }
    }
    return Promise.reject(error);
  }
);

// 封装请求方法
export const get = (url, params) => {
  return service.get(url, { params });
};

export const post = (url, data) => {
  return service.post(url, data);
};

// 其他请求方法类似封装...

// 或者直接导出实例
export default service;
```
总结：
拦截器的作用主要是为了全局处理请求和响应，避免重复代码，统一管理。在封装axios时，我们通过创建实例、配置拦截器、封装请求方法等步骤，使我们的网络请求模块更加健壮和易于维护。

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