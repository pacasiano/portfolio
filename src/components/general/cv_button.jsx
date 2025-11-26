

const DownloadButton = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = `/assets/resume_casiano.pdf`;// Path to your file
        link.download = "resume_casiano.pdf"; // Name for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Clean up the DOM
    };

    return (
        <div className="absolute sm:bottom-16 bottom-32 sm:right-10 right-50 z-40 animate-pulse-custom hover:animate-none">
            <button
                onClick={handleDownload}
                className="bg-[#4c426d] text-white text-sm font-semibold whitespace-nowrap px-4 py-1 rounded-lg hover:bg-[#54438b]"
            >
                Download Résumé
            </button>
        </div>
    );
};

export default DownloadButton;