import Block from '../../utils/Block';
import Error from '../../components/Error';

export default class HomePage extends Block {
  constructor(props: any) {
    super(props);
  }
  init() {
    (this.children.error = new Error({
      text: 'Страница не найдена!',
      type: '404'
    }))
  }
  render() {
    return (
      // language=hbs
      `{{{error}}}`
    );
  }
}
