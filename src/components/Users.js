import {  Component } from 'react'; //useState
import User from './User';

import classes from './Users.module.css';


class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: false,
    };
  }
  toggleUsersHandler () {
    this.setState(curState => {
      return {showUsers:!curState.showUsers};
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <div className={classes.users}>
      <button onClick={this.toggleUsersHandler.bind(this)}>
        {this.state.showUsers ? 'Hide' : 'Show'} Users
      </button>
      {this.state.showUsers && usersList}
    </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   

//   return (
    
//   );
// };

export default Users;



// componentDidMount = useEfect(..., []) - means that called when the component renders
// componentDidUpdate = useEfect(..., [someValues,...]) - means that called when value changed
// componentWillUnmount = useEffect(() => {... // CLENUP}, []);
// 