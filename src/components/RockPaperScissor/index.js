import {Component} from 'react'

import {RiCloseLine} from 'react-icons/ri'

import Popup from 'reactjs-popup'

import GameOptions from '../GameOptions'

import {
  GameMainContainer,
  ScoreTitleContainer,
  UnorderedList,
  GameHeading,
  ScoreContainer,
  ScoreTitle,
  Score,
  GameViewContainer,
  GameOptionsList,
  GameResultViewContainer,
  SelectedOptionsContainer,
  GameUserContainer,
  UserParticipantName,
  UserParticipantChoiceImage,
  FinalResults,
  PlayAgainButton,
  CustomButton,
  PopupContainer,
  PopupBody,
  PopupImage,
  CloseButton,
} from './StyledComponents'

const gameStatusConstants = {
  inProgress: 'IN_PROGRESS',
  win: 'WIN',
  lost: 'LOST',
  draw: 'DRAW',
}

// Class Component
class Game extends Component {
  state = {
    gameStatus: gameStatusConstants.inProgress,
    score: 0,
    userChoice: '',
    gameChoice: '',
  }

  // Game Starts
  onClickSetUserChoice = id => {
    this.setState(
      {userChoice: id, gameChoice: this.getGameChoice()},
      this.evaluateGame,
    )
  }

  //   Play Again
  onClickGoToGameView = () => {
    this.setState({gameStatus: gameStatusConstants.inProgress})
  }

  //   Game Choice Random
  getGameChoice = () => {
    const {choicesList} = this.props
    const gameChoicesList = choicesList.map(eachItem => eachItem.id)
    const randomNumber = Math.floor(Math.random() * 3)
    console.log(randomNumber)
    return gameChoicesList[randomNumber]
  }

  //   Game Evaluate
  evaluateGame = () => {
    const {userChoice, gameChoice} = this.state

    if (userChoice === gameChoice) {
      this.setState({gameStatus: gameStatusConstants.draw})
    } else if (userChoice === 'ROCK') {
      if (gameChoice === 'SCISSORS') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lost,
          score: prevState.score - 1,
        }))
      }
    } else if (userChoice === 'PAPER') {
      if (gameChoice === 'ROCK') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lost,
          score: prevState.score - 1,
        }))
      }
    } else if (userChoice === 'SCISSORS') {
      if (gameChoice === 'PAPER') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lost,
          score: prevState.score - 1,
        }))
      }
    }
  }

  //   Progress view
  renderGameInProgressView = () => {
    const {choicesList} = this.props
    return (
      <GameOptionsList>
        {choicesList.map(eachItem => (
          <GameOptions
            key={eachItem.id}
            optionDetails={eachItem}
            onClickSetUserChoice={this.onClickSetUserChoice}
          />
        ))}
      </GameOptionsList>
    )
  }

  //   Won View
  renderGameWinView = () => {
    const {userChoice, gameChoice} = this.state
    const {choicesList} = this.props

    const userChoiceObjectList = choicesList.filter(
      each => each.id === userChoice,
    )
    const userChoiceObject = userChoiceObjectList[0]
    console.log(userChoiceObject)

    const gameChoiceObjectList = choicesList.filter(
      each => each.id === gameChoice,
    )
    const gameChoiceObject = gameChoiceObjectList[0]

    return (
      <GameResultViewContainer>
        <SelectedOptionsContainer>
          <GameUserContainer>
            <UserParticipantName>You</UserParticipantName>
            <UserParticipantChoiceImage
              src={userChoiceObject.imageUrl}
              alt="your choice"
            />
          </GameUserContainer>
          <GameUserContainer>
            <UserParticipantName>Other</UserParticipantName>
            <UserParticipantChoiceImage
              src={gameChoiceObject.imageUrl}
              alt="opponent choice"
            />
          </GameUserContainer>
        </SelectedOptionsContainer>
        <FinalResults>YOU WON</FinalResults>
        <PlayAgainButton type="button" onClick={this.onClickGoToGameView}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  //   Lost View
  renderGameLostView = () => {
    const {userChoice, gameChoice} = this.state
    const {choicesList} = this.props

    const userChoiceObjectList = choicesList.filter(
      each => each.id === userChoice,
    )
    const userChoiceObject = userChoiceObjectList[0]

    const gameChoiceObjectList = choicesList.filter(
      each => each.id === gameChoice,
    )
    const gameChoiceObject = gameChoiceObjectList[0]

    return (
      <GameResultViewContainer>
        <SelectedOptionsContainer>
          <GameUserContainer>
            <UserParticipantName>You</UserParticipantName>
            <UserParticipantChoiceImage
              src={userChoiceObject.imageUrl}
              alt="your choice"
            />
          </GameUserContainer>
          <GameUserContainer>
            <UserParticipantName>Other</UserParticipantName>
            <UserParticipantChoiceImage
              src={gameChoiceObject.imageUrl}
              alt="opponent choice"
            />
          </GameUserContainer>
        </SelectedOptionsContainer>
        <FinalResults>YOU LOSE</FinalResults>
        <PlayAgainButton type="button" onClick={this.onClickGoToGameView}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  //   Draw View
  renderGameDrawView = () => {
    const {userChoice, gameChoice} = this.state
    const {choicesList} = this.props

    const userChoiceObjectList = choicesList.filter(
      each => each.id === userChoice,
    )
    const userChoiceObject = userChoiceObjectList[0]

    const gameChoiceObjectList = choicesList.filter(
      each => each.id === gameChoice,
    )
    const gameChoiceObject = gameChoiceObjectList[0]

    return (
      <GameResultViewContainer>
        <SelectedOptionsContainer>
          <GameUserContainer>
            <UserParticipantName>You</UserParticipantName>
            <UserParticipantChoiceImage
              src={userChoiceObject.imageUrl}
              alt="your choice"
            />
          </GameUserContainer>
          <GameUserContainer>
            <UserParticipantName>Other</UserParticipantName>
            <UserParticipantChoiceImage
              src={gameChoiceObject.imageUrl}
              alt="opponent choice"
            />
          </GameUserContainer>
        </SelectedOptionsContainer>
        <FinalResults>IT IS DRAW</FinalResults>
        <PlayAgainButton type="button" onClick={this.onClickGoToGameView}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  //   Render Game View
  renderGameView = () => {
    const {gameStatus} = this.state
    switch (gameStatus) {
      case gameStatusConstants.inProgress:
        return this.renderGameInProgressView()
      case gameStatusConstants.win:
        return this.renderGameWinView()
      case gameStatusConstants.lost:
        return this.renderGameLostView()
      case gameStatusConstants.draw:
        return this.renderGameDrawView()
      default:
        return null
    }
  }

  //   Final Render For Output
  render() {
    const {score} = this.state
    return (
      <GameMainContainer>
        <ScoreTitleContainer>
          <UnorderedList>
            <GameHeading>
              Rock
              <br />
              Paper
              <br />
              Scissors
            </GameHeading>
          </UnorderedList>
          <ScoreContainer>
            <ScoreTitle>Score</ScoreTitle>
            <Score>{score}</Score>
          </ScoreContainer>
        </ScoreTitleContainer>
        <GameViewContainer>{this.renderGameView()}</GameViewContainer>

        <PopupContainer>
          <Popup
            modal
            trigger={<CustomButton type="button">RULES</CustomButton>}
            closeOnEscape
            window
          >
            {close => (
              <PopupBody>
                <PopupImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
                <CloseButton type="button" onClick={() => close()}>
                  <RiCloseLine />
                </CloseButton>
              </PopupBody>
            )}
          </Popup>
        </PopupContainer>
      </GameMainContainer>
    )
  }
}

export default Game
