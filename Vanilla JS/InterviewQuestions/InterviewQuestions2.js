async function sequentialDelayedCounting(limit = 5) {
    try {
        let counter = 1;

        const abc = () => {
            let random = randomNumber();

            const interval = setInterval(() => {

                if (counter > limit) {
                    console.log("Sequence completed!");

                    clearInterval(interval)
                } else {
                    console.log(random);

                    console.log("Waiting for " + random + "ms before logging: " );
                    console.log(counter)
                    counter++
                    random = randomNumber();
                }
            }
                , random)
        }

        abc()
    } catch (error) { }
}

const randomNumber = () => Math.floor(Math.random() * (4000 - 1000) + 1000)

sequentialDelayedCounting(6);
