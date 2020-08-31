import styles from './Banner.module.css';

export default function Banner(props) {
  const { shouldDisplay } = props;

  return (
    <section className={styles.banner}>
      {shouldDisplay && (
        <div>Thank you for your submissions!</div>
      )}
    </section>
  );
}
