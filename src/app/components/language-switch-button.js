import { useTranslation } from "react-i18next";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Icon } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "@/app/lib/store";
import { StyledMenu } from "@/app/components/styled-menu";

export default function LanguageSwitchButton() {
  const supportedLanguages = {
    en: { nativeName: "English", flagIcon: "assets/flags/american_flag.png" },
    pl: { nativeName: "Polski", flagIcon: "assets/flags/polish_flag.png" },
  };

  const language = useSelector((state) => {
    return state.languageState.usedLanguage;
  });

  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const changeLanguageAndCloseMenu = (language) => {
    i18n.changeLanguage(language).then(() => {
      dispatch(changeLanguage(language));
      handleClose();
    });
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        className="rounded-full bg-[#F5F5F5] px-[10px] py-[9px] text-black text-[12px] font-normal font-lexend"
        id="language-switch-button"
        aria-controls={open ? "language-switch-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        sx={{
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#D8D8D8",
          },
        }}
        onClick={handleClick}
        endIcon={
          <Icon className="flex items-center">
            <img
              src={supportedLanguages[i18n.language].flagIcon}
              height={15}
              width={15}
            />
          </Icon>
        }
      >
        {supportedLanguages[i18n.language].nativeName}
      </Button>
      <StyledMenu
        id="language-switch-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {Object.keys(supportedLanguages).map((language) => (
          <MenuItem
            type="submit"
            key={language}
            onClick={() => changeLanguageAndCloseMenu(language)}
            disabled={i18n.resolvedLanguage === language}
            disableRipple
            className="text-black text-[12px] font-normal font-lexend"
          >
            <Icon className="flex items-center">
              <img
                src={supportedLanguages[language].flagIcon}
                height={15}
                width={15}
              />
            </Icon>
            {supportedLanguages[language].nativeName}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}
