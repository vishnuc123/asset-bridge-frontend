import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import type { RootState } from "../store/store"

const KycGuard = ({ children }: { children: React.ReactNode }) => {
    const auth = useSelector((state: RootState) => state.auth)
    let activerole = auth.activeRole
    if (auth.kycStatus !== "verified" && activerole) {
        return <Navigate to={`/${activerole}/kyc_verification`} />
    }

    return children
}
export default KycGuard;