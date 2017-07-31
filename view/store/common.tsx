import {observable, useStrict} from 'mobx';

useStrict(true);

export class CommonStore {
    @observable public constants: any = (window as any).CONSTANTS;
}
