import {
    Avatar,
    Icon,
    ShellBar,
    ShellBarItem
} from "@ui5/webcomponents-react";

type Props = {};

const Header = (props: Props) => {
  return (
    <ShellBar
      primaryTitle="Micro Frontends demo"
      profile={
        <Avatar>
          <Icon name="person-placeholder" />
        </Avatar>
      }
    >
      <ShellBarItem icon="question-mark" text="question" />
    </ShellBar>
  );
};

export default Header;
