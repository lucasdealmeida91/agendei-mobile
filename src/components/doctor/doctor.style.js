import { COLORS, FONT_SIZE } from "../../constants/theme"
export const styles = {
    doctor: {
        padding: 8, backgroundColor: COLORS.white, flex: 1, flexDirection: "row",
        alignItems: "center", borderColor: COLORS.gray4, borderWidth: 1, marginTop: 3, marginBottom: 3, borderRadius: 6
    },
    name: { fontSize: FONT_SIZE.md, color: COLORS.gray1, marginTop: 5 },
    specialty: { fontSize: FONT_SIZE.sm, color: COLORS.gray3, },
    icon: { width: 50, height: 50, marginRight: 8 }
}

