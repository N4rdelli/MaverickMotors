import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerContent}>
      <div className={styles.searchBar}>
        <input type='search' placeholder="Search..." style={{placeholder:'#394960'}}/>
        <i className="bi bi-search" />
      </div>
      <button className={styles.filterButton}>
        <i className="bi bi-filter" />
      </button>
      <button className={styles.addButton}>
        <i class="bi bi-plus-circle"/>
        Add
      </button>
    </div>
  );
};

export default Header;
