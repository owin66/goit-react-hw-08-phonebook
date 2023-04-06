import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser, selectIsLoggedIn } from 'redux/auth/selectors';
import { Heading, UserLink, Text } from './Home.styled';
import { LogOutButton } from './Home.styled';

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const handleClick = () => dispatch(logOut());

  return (
    <>
      {isLoggedIn ? (
        <>
          <Heading>Hello, {user.name}!</Heading>
          <Text>To your phonebook</Text>
          <UserLink to="/contacts">Contacts</UserLink>
          <Text>Switch to another account</Text>
          <LogOutButton type="button" onClick={handleClick}>
            Logout
          </LogOutButton>
        </>
      ) : (
        <>
          <Heading>Your phonebook!</Heading>
          <Text>Please, login</Text>
          <UserLink to="/login">Log-in</UserLink>
          <Text>Sign-up</Text>
          <UserLink to="/register">Sign-up</UserLink>
        </>
      )}
    </>
  );
};

export default Home;
