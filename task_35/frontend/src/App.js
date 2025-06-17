import logo from './logo.svg';
import './App.css';
import CreateUser from './components/CreateUser';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <CreateUser/>
      <CreatePost/>
      <PostList />
    </div>
  );
}

export default App;
