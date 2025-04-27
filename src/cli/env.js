const parseEnv = () => {
  console.log(
    Object.entries(process.env)
      .filter(([k, v]) => k.startsWith("RSS_"))
      .map(([k, v]) => `${k}=${v};`).join(' ')
  );
};

parseEnv();
