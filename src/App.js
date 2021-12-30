import {
  Box, Center, ChakraProvider,
  Grid,
  GridItem, Heading,
} from '@chakra-ui/react';
import { useState } from 'react';
import Confetti from 'react-confetti';
import './App.css';
import ShapeIcon from './icons';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
const Square = ({ value, onTrigger }) => {
  return (
    <GridItem colSpan={1} rowSpan={1} key={value}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems={"center"}
        onClick={() => onTrigger()}
      >
        <ShapeIcon
          icon={value}
        />
      </Box>
    </GridItem >
  )
}


function App() {
  const [squares, setSquares] = useState(Array(9).fill(" "))
  const [xIsNext, setXisNext] = useState(true)
  const [winner, setWinner] = useState(" ")
  const { innerWidth: width, innerHeight: height } = window;

  const controlFn = (i, index) => {
    const newSquare = squares.slice()
    newSquare[index] = xIsNext ? "X" : "O"
    const win = calculateWinner(newSquare)
    if (win === "X" || win === "O") {
      setWinner(win)
    } else {
      setXisNext(!xIsNext)
    }
    if (winner === " ") {
      setSquares(newSquare)
    }
  }

  return (
    <ChakraProvider>
      <Center
        display={"flex"}
        color="gray.400"
        bg="gray.100"
        h="100vh"
        flexDirection={"column"}>
        {
          winner === "X" || winner === "O" ? (
            <>
              < Heading
                color="teal.500"
                fontSize={"sm"}
                my={8}>
                {winner} is the winner
              </Heading>
              <Confetti
                width={width}
                height={height} />
            </>
          ) : (
            < Heading fontSize={"sm"} my={8}>
              Next player: is {xIsNext ? "X" : "O"}
            </Heading>
          )
        }
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
      </Center>
    </ChakraProvider >
  );
}

export default App;
