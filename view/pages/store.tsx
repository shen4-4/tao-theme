import {observable, action, useStrict} from 'mobx';
import { cloneDeep } from 'lodash'
import { fetchJSONByGet, fetchJSONByPut, fetchJSONByDelete } from '../utils/ajax'
useStrict(true);

export interface FormValue {
  syscode?: string,
  name?: string,
  id?: number | string,
  resources?: string,
  rescode?: string,
  parent?: string | number,
  url?: string,
  restype?: string,
  parentLevel?: number,
}

export class AuthStore {

  private formValueInit: FormValue = {
    syscode: '6',
    name: '',
    id: '',
    parent: '',
    resources: '',
    rescode: '',
    url: '',
    restype: '',
  }

  @observable public authList: Array<any> = []

  @observable public authMenuList: Array<any> = []

  @observable public formValue: FormValue = {
    syscode: '6',
    name: '',
    id: '',
    parent: '',
    resources: '',
    rescode: '',
    url: '',
    restype: '',
  };

  @action
  cacheSearch(value: FormValue): void {
    this.formValue = Object.assign({}, this.formValue, value);
  }

  @action
  clear(): void {
    this.formValue = Object.assign({}, this.formValueInit);
  }

  @action
  search(query: FormValue): void {
    fetchJSONByGet('/api/auth/list', query, action((resp: any) => {
      this.authList = resp as any
    }))
  }

  /** add edit */
  @observable public addEditFormValue: FormValue = {
    syscode: '6',
    name: '',
    id: '',
    parent: '',
    resources: '',
    rescode: '',
    url: '',
    restype: '',
  }

  @action
  updateAddEditFormValue(value: FormValue): void {
    this.addEditFormValue = Object.assign({}, this.addEditFormValue, value);
  }

  @action
  clearAddFormValue(value: FormValue): void {
    this.addEditFormValue = Object.assign({}, this.formValueInit);
  }

  /** create */
  authCreate(query: FormValue, cb?: Function): void {
    fetchJSONByPut('/api/auth/create', query, (resp: any) => {
      cb && cb()
    })
  }

  /** update */
  @action
  authUpdate(query: FormValue, cb?: Function): void {
    fetchJSONByPut('/api/auth/update', query, (resp: any) => {
      cb && cb()
    })
  }
  /** insert */
  @action
  authInsert(query: FormValue, cb?: Function): void {
    fetchJSONByPut('/api/auth/insert', query, ( resp: any ) => {
      cb && cb()
    })
  }

  /** delete */
  @action
  authDelete(query: FormValue, cb?: Function): void {
    fetchJSONByDelete('/api/auth/delete', query, () => {
      cb && cb()
    })
  }

  /** search menu */
  @action
  getAuthMenuList(query: FormValue): void {
    fetchJSONByGet('/api/auth/menu/list', query, action((resp: any) => {
      this.authMenuList = resp as any
    }))
  }
}
