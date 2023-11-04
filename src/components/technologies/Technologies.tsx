import classes from "./technologies.module.scss";

const Technologies = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.division}>
          <h1>Front-End</h1>
          <div className={classes.list}>
            <p>React</p>
            <p>Angular</p>
            <p>VueJS</p>
          </div>
        </div>

        <div className={classes.division}>
          <h1>Back-End</h1>
          <div className={classes.list}>
            <p>NodeJS</p>
            <p>Java</p>
            <p>TypeScript</p>
          </div>
        </div>

        <div className={classes.division}>
          <h1>Databases</h1>
          <div className={classes.list}>
            <p>PostgreSQL</p>
            <p>MongoDB</p>
            <p>MySQL</p>
          </div>
        </div>

        <div className={classes.division}>
          <h1>Tools</h1>
          <div className={classes.list}>
            <p>GitHub</p>
            <p>Figma</p>
            <p>Photoshop</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
