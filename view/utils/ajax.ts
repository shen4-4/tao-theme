import fetch from 'isomorphic-fetch'

export function fetchJSON(url: string, params: any, cb?: Function) {
  params = {
    credentials: 'include',
    ...params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      ...params.headers,
    },
  }
  url = `${url}`
  return fetch(url, params).then(resp => resp.json()).then(resp => { cb && cb(resp)})
}

function buildURL(url: string, data: any) {
  return url.split('/').map((item) => {
    if (item.indexOf('$') === 0) {
      const key = item.slice(1)
      if (data[key] !== undefined) {
        const value = data[key]
        delete data[key]
        return value
      }
      return item
    }
    return item
  }).join('/')
}

function buildParams(obj: any) {
  if (!obj) {
    return ''
  }
  const params: Array<any> = []
  for (const key in obj) {
    if ({}.hasOwnProperty.call(obj, key)) {
      const value = obj[key] === undefined ? '' : obj[key]
      params.push(`${key}=${value}`)
    }
  }
  return params.join('&')
}

export const fetchJSONByPost = (url: string, query: any, cb?: Function) => {
  const params = {
    method: 'POST',
    body: buildParams(query),
  }
  const buildUrl = buildURL(url, query)
  return fetchJSON(buildUrl, params, cb)
}

export const fetchJSONByGet = (url: string, query: any, cb?: Function) => {
  const params = {
    method: 'GET',
  }
  let getQuery = '?'
  Object.keys(query).map(key => {
    query[key] === undefined ? getQuery = getQuery : getQuery += `${key}=${query[key]}&`;
  })
  const buildUrl = buildURL(url, query)
  const getUrl = buildUrl + (query ? getQuery.substring(0, getQuery.length - 1) : '');
  return fetchJSON(getUrl, params, cb)
}

export const fetchJSONByPut = (url: string, data: any, cb?: Function) => {
  const params = {
    method: 'PUT',
    body: buildParams(data),
  }
  const buildUrl = buildURL(url, data)
  return fetchJSON(buildUrl, params, cb)
}

export const fetchJSONByDelete = (url: string, data: any, cb?: Function) => {
  const params = {
    method: 'DELETE',
    body: buildParams(data),
  }
  const buildUrl = buildURL(url, data)
  return fetchJSON(buildUrl, params, cb)
}

export const fetchJSONStringByPost = (url: string, data: any, cb?: Function) => {
  const params = {
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8;',
    },
  }
  return fetchJSON(url, params, cb)
}
