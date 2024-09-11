import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <h1>Posts</h1>
      <Post imageUrl="https://cdn.awsli.com.br/2500x2500/2571/2571273/produto/210255920/porsche-911-993-1998-ruf-turbo-r-118-gt-spirit-2d3e13a2.jpg">
        Olha só que legal minha miniatura do Porsche 911 1998 Ruf Turbo GT Spirit.
      </Post>
    </div>
  );
}

export default App;
