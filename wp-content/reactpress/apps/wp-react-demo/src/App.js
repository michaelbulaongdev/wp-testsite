import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>Here is an example of a React app with WP backend.</p>
				<a
					className='App-link'
					href='http://localhost/testsite/wp-admin/index.php'
					target='_blank'
					rel='noopener noreferrer'>
					Go to WP Dashboard
				</a>
			</header>
		</div>
	);
}

export default App;
