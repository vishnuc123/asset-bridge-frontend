import { Component, type ErrorInfo, type ReactNode } from "react";

export interface IErrorBoundaryProps {
    children: ReactNode
}

export interface IErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorMessage: ErrorInfo | null
}

export class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
    state: IErrorBoundaryState;
    constructor(props: IErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false, error: null, errorMessage: null }
    }
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error("uncaught Error", error, errorInfo);
        this.setState({
            hasError: true,
            error,
            errorMessage: errorInfo
        })
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex items-center justify-center min-h-screen text-center" >
                    <div>
                        <h1 className="text-3xl font-bold text-red-600 mb-4" > Something went wrong </h1>
                        <details>
                            {this.state.error && this.state.error.toString()}
                            <br />
                            {this.state.errorMessage?.componentStack}
                        </details>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}