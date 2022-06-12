import Navigation from './Navigation';
import style from './Layout.module.css'

function Layout(props) {
  return (
    <div className={style.all}>
      <Navigation />
      <main className={style.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
