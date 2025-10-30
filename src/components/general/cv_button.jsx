

const DownloadButton = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = `/assets/cv_casiano.pdf`;// Path to your file
        link.download = "cv_casiano.pdf"; // Name for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Clean up the DOM
    };

    return (
        <div className="absolute bottom-36 right-10 z-40 animate-pulse-custom hover:animate-none">
            <button
                onClick={handleDownload}
                className="bg-[#4c426d] text-white text-sm font-semibold whitespace-nowrap px-4 py-1 rounded-lg hover:bg-[#54438b]"
            >
                Download CV
            </button>
        </div>
    );
};

export default DownloadButton;