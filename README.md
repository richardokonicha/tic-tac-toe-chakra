# Tic Tac Toe Game 

This is a tic tac toe game built using chakra ui.
https://tic-tac-chakra.vercel.app/

![Tic tac](https://github.com/konichar/tic-tac-toe-chakra/blob/main/tictac.png)

## Available Scripts

Chakra Grid

```
        <Grid
          templateColumns="repeat(3, 1fr)"
          templateRows="repeat(3, 1fr)"
          gap={4}
          role="group"
        >
          {squares.map((i, index) => (
            <Square
              onTrigger={() => controlFn(i, index)}
              value={squares[index]}
              key={index}
              _hover={{
                bg: "blue.500",
              }} />
          ))}
        </Grid>

```
![Tic tac](https://github.com/konichar/tic-tac-toe-chakra/blob/main/tictackk.png)


In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

