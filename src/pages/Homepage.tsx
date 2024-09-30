import YellowButton from "@components/YellowButton.tsx"

export default function Homepage() {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">

                <YellowButton
                    width="200px"
                    height="100px"
                    onClick={() => { console.log("Hello, World") }} >
                    Hello Wolrd
                </ YellowButton>

            </div>
        </>
    )


}
