export default function Tabs({children, buttons, buttonContainer}){
    const ButtonsContainer = buttonContainer;

    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>

    )
}