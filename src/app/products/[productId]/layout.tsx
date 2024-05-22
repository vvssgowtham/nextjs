export default function ProductDetailsLayout({children}: {
    children : React.ReactNode;
}) {
    return (
        <>
            {children}
            <h2>Features products</h2>
        </>
    )
}
// Here the children refers to the id of the product that is being passed to the layout component.
//This layout file will replace the children in main layout.tsx file.