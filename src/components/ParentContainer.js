
import styles from '../index.module.css';
import imgages from '../logo.svg';
function Todo() {
  return (
    <div className={styles.parentContainer}>
      <div className={styles.heading}>
        <img src={imgages} alt="React Logo" />
        <nav><ul className={styles.nobullets}><li><button className={styles.btn}>SignUp</button></li><li><button className={styles.btn}>SignIn</button></li></ul></nav>
      </div>
    </div>
  );
}

export default Todo;

/**
 * 
 * <Box min-width="100px">
	<Box min-width="100px" display="grid" grid-template-rows="80px 200px">
		<Image src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=200" justify-self="center" />
		<Box justify-self="end">
			<Button>
				Button
			</Button>
			<Button>
				Button
			</Button>
		</Box>
	</Box>
</Box>
 */