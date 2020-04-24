import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store';
import DatePicker from './components/date-picker';

type TemplateType = {
	title: string,
	status: string,
};

const NavBar = () => (
	<div className="navbar">
		<h3>Task Manager</h3>
		<Link to="/">Current Tasks</Link>
		<Link to="/completed">Completed Tasks</Link>
	</div>
);

const Template: React.FC<TemplateType> = ({ title, status }) => (
	<div>
		<NavBar />
		<p className="page-info">{title}:</p>
		<ul className={status}>
			<li>Task 1</li>
			<li>Task 2</li>
			<li>Task 3</li>
		</ul>
	</div>
);

const CurrentTasks = () => <Template title="Current Tasks" status="Current" />;

const CompletedTasks = () => <Template title="Completed Tasks" status="Completed" />;

class App extends PureComponent {
	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<BrowserRouter>
						<div>
							<Route exact path="/" component={CurrentTasks} />
							<Route path="/completed" component={CompletedTasks} />
							<DatePicker />
						</div>
					</BrowserRouter>
				</PersistGate>
			</Provider>
		);
	}
}

export default App;
