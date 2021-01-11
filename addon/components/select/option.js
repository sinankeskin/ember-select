import Component from '@glimmer/component';
import { get } from '@ember/object';

export default class SelectOptionComponent extends Component {
  get value() {
    if (this.args.selectorName) {
      return get(this.args.value, this.args.selectorName);
    }

    return this.args.value;
  }

  get selected() {
    let selectedValue = this.args.selected;

    if (selectedValue !== null && typeof selectedValue === 'boolean') {
      return selectedValue;
    }

    if (
      selectedValue !== null &&
      typeof selectedValue === 'object' &&
      selectedValue['content']
    ) {
      return this.args.value === selectedValue['content'];
    } else {
      return this.args.value === selectedValue;
    }
  }
}
