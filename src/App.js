import React, { useReducer } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import EventBind from "./Components/EventBind";
import FunctionClick from "./Components/FunctionClick";
import Greet from "./Components/Greet";
import Login from "./Components/Login";
import Message from "./Components/Message";
import NameList from "./Components/NameList";
import ParentComponent from "./Components/ParentComponent";
import UserGreeting from "./Components/UserGreeting";
import Welcome from "./Components/Welcome";
import StyleSheet from "./Components/StyleSheet";
import InLine from "./Components/InLine";
import "./appStyles.css"; // It can be used in Children Component
import Style from "./appStyles.module.css"; //It cannot be used in Children Component
import Form from "./Components/Form";
import LifeCycleA from "./Components/LifeCycleA";
import Table from "./Components/Table";
import ParentComp from "./Components/ParentComp";
import RefsDemo from "./RefsDemo";
import FocusInput from "./Components/FocusInput";
import FRParent from "./Components/FRParent";
import PortalRootDemo from "./Components/PortalRootDemo";
import ErrorBoundary from "./Components/ErrorBoundary";
import Hero from "./Components/Hero";
import ClickCounter from "./Components/ClickCounter";
import HoverCounter from "./Components/HoverCounter";
import User from "./Components/User";
import CounterTwo from "./Components/CounterTwo";
import ClickCounterTwo from "./ClickCounterTwo";
import HoverCounterTwo from "./HoverCounterTwo";
import { UserProvider } from "./Components/userContext";
// import ComponentC from "./Components/ComponentC";
import PostList from "./Components/HttpRequests/PostList";
import PostForm from "./Components/HttpRequests/PostForm";
import LoginForm from "./Components/LoginForm";
import HooksCounter from "./ReactHooks/HooksCounter";
import HookCounterTwo from "./ReactHooks/HookCounterTwo";
import HookCounterThree from "./ReactHooks/HookCounterThree";
import HookCounterFour from "./ReactHooks/HookCounterFour";
import ClassCounterOne from "./ReactHooks/ClassCounterOne";
import HookCounterOne from "./ReactHooks/HookCounterOne";
import HookMouse from "./ReactHooks/HookMouse";
import MouseContainer from "./ReactHooks/MouseContainer";
import IntervalHookCounter from "./ReactHooks/IntervalHookCounter";
import IntervalClassCounter from "./ReactHooks/IntervalClassCounter";
import DataFetching from "./ReactHooks/DataFetching";
import HookComponentC from "./ReactHooks/HookComponentC";
import HooksCounterOne from "./ReactHooks/HooksCounterOne";
import HooksCounterTwo from "./ReactHooks/HooksCounterTwo";
import HooksCounterThree from "./ReactHooks/HooksCounterThree";
import ComponentA from "./ReactHooks/ComponentA";
import ComponentB from "./ReactHooks/ComponentB";
import ComponentC from "./ReactHooks/ComponentC";
import DataFetchingOne from "./ReactHooks/DataFetchingOne";
import DataFetchingReducer from "./ReactHooks/DataFetchingReducer";
import ParentComponents from "./ReactHooks/CallBackHook/ParentComponents";
import CounterMemo from "./ReactHooks/MemoHook/CounterMemo";
import FocusInputRef from "./ReactHooks/RefHook/FocusInputRef";
import ClassTimer from "./ReactHooks/RefHook/ClassTimer";
import HookTimer from "./ReactHooks/RefHook/HookTimer";
import DocTitleOne from "./ReactHooks/Customhooks/DocTitleOne";
import DocTitleTwo from "./ReactHooks/Customhooks/DocTitleTwo";
import CustomCounterOne from "./ReactHooks/Customhooks/CustomCounterOne";
import CustomCounterTwo from "./ReactHooks/Customhooks/CustomCounterTwo";
import Sample from "./Practice/Sample";
import DiaryApp from "./Practice/Diary";
import Todo from "./Practice/Todo";
import DiaryView from "./Practice/DiaryApp/DiaryView";
import TodoHooks from "./Practice/TodoHooks";
import DiaryHome from "./Practice/DiaryHome";
import Calculator from "./Practice/CalculatorApp/Calculator";
import KeyPadComp from "./Practice/CalculatorApp/Components/KeyPadComp";
import ChatRoom from "./ChatApp/ChatRoom";
import ReactHookForm from "./Practice/ReactHookForm";
import Home from "./FullStackProjects/Home";

export const UserNameContext = React.createContext();
export const ChannelContext = React.createContext();

export const CountContext = React.createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      {/* <h1 className="error">Error</h1>
      <h1 className={Style.success}>Success</h1>
      <Greet name="Bruce!" placeName="brazil">
        <p>This is Children Props</p>
      </Greet>
      <Greet name="Alex!" placeName="India">
        <button
          onClick={() => {
            alert("Welcome Alex..!");
          }}
        >
          Action
        </button>
      </Greet>
      <Welcome name="Bruce!" placeName="brazil" />
      <Message />
      <Counter />
      <FunctionClick />
      <EventBind />
      <ParentComponent />
      <UserGreeting />
      <NameList />
      <Login Name={"Stefan"} />
      <StyleSheet primary={true} />
      <InLine />
      <Form />
      <LifeCycleA />
      <Table />
      <ParentComp />
      <RefsDemo />
      <FocusInput />
      <FRParent />
      <PortalRootDemo />
      <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Spyderman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
      <ClickCounter name="Alex..!" />
      <HoverCounter name="Bruno...!" /> */}
      {/* <User render= {(isLoggedIn) => isLoggedIn ? "Bruno..!" : "Guest"} /> */}

      {/* <CounterTwo
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />

      <CounterTwo
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      /> */}

      {/* <CounterTwo>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </CounterTwo>

      <CounterTwo>
        {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </CounterTwo> */}

      {/* <UserProvider value="BruceLee..!" >
        <ComponentC />
      </UserProvider> */}

      {/* <PostList /> */}
      {/* <PostForm /> */}
      {/* <LoginForm /> */}

      {/* <HooksCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <ClassCounterOne />
      <HookCounterOne />
      <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter />
      <IntervalHookCounter /> */}
      {/* <DataFetching /> */}

      {/* <UserNameContext.Provider value={'Bruce..!'}>
        <ChannelContext.Provider value={'Alex'}>
					<HookComponentC />
				</ChannelContext.Provider>
			</UserNameContext.Provider> */}

      {/* <HooksCounterOne /> */}
      {/* <HooksCounterTwo /> */}
      {/* <HooksCounterThree /> */}
      {/* 
      <CountContext.Provider value={{countState:count, countDispatch : dispatch}} >
        <div>
        count : {count}
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </div>
      </CountContext.Provider> */}

      {/* <DataFetchingOne /> */}
      {/* <DataFetchingReducer /> */}
      {/* <ParentComponents /> */}
      {/* <CounterMemo /> */}
      {/* <FocusInputRef /> */}
      {/* <ClassTimer />
      <HookTimer /> */}
      {/* <DocTitleOne />
      <DocTitleTwo /> */}
      {/* <CustomCounterOne />
      <CustomCounterTwo /> */}
      {/* <Sample /> */}
      {/* <DiaryApp /> */}
      {/* <Todo /> */}
      {/* <TodoHooks /> */}
      {/* <DiaryHome /> */}
      {/* <DiaryView /> */}
      {/* <Calculator /> */}
      {/* <ChatRoom /> */}
      {/* <ReactHookForm /> */}
      <Home />
    </div>
  );
}

export default App;
