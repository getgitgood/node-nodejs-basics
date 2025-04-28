const parseArgs = () => {
  const args = process.argv.slice(2);

  const arr = args
    .map((v) => v.replace(/--/g, ""))
    .reduce((acc, v, i, arr) => {
      if (i % 2 === 0) acc.push(`${v} is ${arr[i + 1]}`);

      return acc;
    }, []);

  console.log(arr.join(", "));
};

parseArgs();
