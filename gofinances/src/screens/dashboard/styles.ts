import { Feather } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const DashboardContainer = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  height: ${RFPercentage(36)}px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

export const UserWrapper = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 24px;

  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
`;

export const User = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AvatarUser = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 5px;
  overflow: hidden;
  margin-right: 17px;
`;

export const UserInfo = styled.View``;

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-top: -8px;
`;



export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(24)}px;
`;

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 24,
  },
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`;
