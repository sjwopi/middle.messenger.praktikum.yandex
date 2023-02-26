import Block from '../../utils/Block';
import Error from '../../components/Error';

export default class HomePage extends Block {
  constructor(props: any) {
    super(props);
  }
  init() {
    (this.children.error = new Error({
      text: 'Вина на нашей стороне, уже фиксим!',
      type: '500'
    }))
  }
  render() {
    return (
      // language=hbs
      `{{{error}}}`
    );
  }
}
