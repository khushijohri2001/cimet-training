import { useContext } from "react";
import { createContext } from "react";

const GameContext = createContext();

const GameProvider = ({children}) => {
    const [totalClicks, setTotalClicks] = useState(0);
    
    return (
        <GameContext.Provider>
            {children}
        </GameContext.Provider>
    )
}

const useGame = () => useContext(GameContext);

export {GameProvider, useGame}