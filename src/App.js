import { ChatEngine } from 'react-chat-engine';

//import ChatFeed from './components/ChatFeed';
//import LoginForm from './components/LoginForm';
import './App.css';

const projectID = '2b01117f-6a9d-4432-90e5-a346fcb8c5f2';

const App = () => {
  //if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName="Oxygeneleye"
      userSecret="Leye0202"
      //renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      //onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;
