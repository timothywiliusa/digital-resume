import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

const MENU_ITEMS = ['projects', 'skills', 'education'];

const styles = {
	fixed: window.innerWidth >= 575.98 ? '' : 'bottom',
	secondary: window.innerWidth >= 575.98 ? true : false
};

class Header extends Component {
	state = {
		activeRoute: 'experience'
	};

	componentDidMount() {
		const { pathname } = this.props.location;
		this.setState({
			activeRoute: pathname === '/' ? 'experience' : pathname.slice(1)
		});
	}

	handleRouteClick = (e, { name }) => {
		this.setState({ activeRoute: name });
		this.props.history.push(`/${name}`);
	};

	renderMenuItems = () => {
		const { activeRoute } = this.state;

		return MENU_ITEMS.map((item) => {
			return (
				<Menu.Item name={item} active={activeRoute === item} onClick={this.handleRouteClick} link key={item}>
					{item.charAt(0).toUpperCase() + item.slice(1)}
				</Menu.Item>
			);
		});
	};

	render() {
		return (
			<Menu
				pointing
				fixed={styles.fixed}
				secondary={styles.secondary}
				fluid
				widths={4}
				size={window.innerWidth >= 575.98 ? 'huge' : 'large'}
			>
				{this.renderMenuItems()}
			</Menu>
		);
	}
}

export default withRouter(Header);
