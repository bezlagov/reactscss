import FormPanel from '../FormPanel/FormPanel';
import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.container}>
      <FormPanel TitleData="Login form" />
    </div>
  );
}

export default App;
