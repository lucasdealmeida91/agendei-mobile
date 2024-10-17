import { COLORS, FONT_SIZE } from "../../constants/theme"
export const styles = {
    logo: { width: 100, height: 23 },
    container: { padding: 50, backgroundColor: COLORS.white, flex: 1, justifyContent: "space-between" },
    containerLogo: { alignItems: "center", },
    input: { backgroundColor: COLORS.gray5, borderRadius: 6, padding: 10, marginBottom: 10 },
    footer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    footerLink: { marginLeft: 5, color: COLORS.blue },
    footerText: { color: COLORS.gray3 }
}

