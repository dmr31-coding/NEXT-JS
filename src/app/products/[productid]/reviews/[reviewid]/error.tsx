// 24. Error handling

export default function ErrorBoundary({ error }: { error: Error}) {
    return <div>{error.message}</div>
}