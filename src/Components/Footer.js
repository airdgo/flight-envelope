import { GitHubIco } from "./Icons/GitHubIco";
export const Footer = () => {
	return (
		<div className="absolute bottom-0 text-[#fbfbfb] w-full opacity-75 py-3 px-4 flex justify-end">
			<a href="https://github.com/airdgo" target="_blank">
				<GitHubIco />
			</a>
		</div>
	);
};
