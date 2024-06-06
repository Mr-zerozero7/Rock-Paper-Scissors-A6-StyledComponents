import styled from 'styled-components'

export const GameMainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #223a5f;
  color: #ffffff;
`

export const ScoreTitleContainer = styled.div`
  border: solid 3px #ffffff;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  margin-top: 40px;
  width: 65%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const UnorderedList = styled.div`
  padding-left: 0px;
`
export const GameHeading = styled.h1`
  margin: 5px;
  font-size: 20px;
`
export const ScoreContainer = styled.div`
  background-color: #ffffff;
  border: none;
  border-radius: 10px;
  color: #223a5f;
  width: 140px;
  height: 130px;
  text-align: center;
  font-weight: bold;
  padding: 10px;
`
export const ScoreTitle = styled.p`
  font-size: 24px;
  margin: 0px;
`
export const Score = styled.p`
  font-size: 40px;
  margin: 0px;
  font-family: 'Roboto';
`
export const GameViewContainer = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const GameOptionsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  max-width: 480px;
  flex-wrap: wrap;
`

export const CustomButton = styled.button`
  border: none;
  border-radius: 10px;
  padding: 14px;
  margin: 18px;
  font-weight: 700;
`

export const RulesContainer = styled.div`
  justify-self: flex-end;
  align-self: flex-end;
`

export const GameResultViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const SelectedOptionsContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const GameUserContainer = styled.div`
  text-align: center;
`
export const UserParticipantName = styled.p`
  font-weight: 600;
  font-size: 20px;
`
export const UserParticipantChoiceImage = styled.img`
  width: 120px;
  height: 120px;
  margin: 20px;
`
export const FinalResults = styled.p`
  font-size: 22px;
  font-weight: 600;
`
export const PlayAgainButton = styled.button`
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 10px;
  width: 150px;
  background-color: #ffffff;
  color: #223a5f;
  font-size: 18px;
  font-weight: 600;
`

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
  justify-content: flex-end;
`
export const PopupBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 10px;
`
export const PopupImage = styled.img`
  width: 90%;
  height: 500px;
  border-radius: 10px;
  align-self: center;
`

export const CloseButton = styled.button`
  border: none;
  background-color: lightgray;
  color: #223a5f;
  padding: 5px;
  border-radius: 6px;
  font-size: 22px;
  font-weight: 700;
  width: 40px;
`
