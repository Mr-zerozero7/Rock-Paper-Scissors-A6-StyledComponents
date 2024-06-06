import {OptionListItem, GameOptionButton, OptionImage} from './StyledComponents'

const GameOptions = props => {
  const {optionDetails, onClickSetUserChoice} = props
  const {imageUrl, id} = optionDetails

  const onUserChoice = () => {
    onClickSetUserChoice(id)
  }

  return (
    <OptionListItem>
      <GameOptionButton
        type="button"
        onClick={onUserChoice}
        data-testid={`${id.toLowerCase()}Button`}
      >
        <OptionImage src={imageUrl} alt={id} />
      </GameOptionButton>
    </OptionListItem>
  )
}

export default GameOptions
