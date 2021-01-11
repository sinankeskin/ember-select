import Component from '@glimmer/component';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';

export default class SelectComponent extends Component {
  elementId = guidFor(this);

  @action
  _onSelect(event) {
    if (this.args.onSelect && typeof this.args.onSelect === 'function') {
      if (this.args.selectorName) {
        const selected = this.args.objects.findBy(
          this.args.selectorName,
          event.target.value
        );

        this.args.onSelect(selected);
      } else {
        this.args.onSelect(event.target.value);
      }
    }
  }
}
