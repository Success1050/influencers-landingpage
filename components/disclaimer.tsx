export default function DisclaimerComponent() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="border border-gray-300 rounded p-4 sm:p-6 lg:p-8 bg-gray-50">
        <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
          <p>
            This website is a resource for event professionals and strives to
            provide the most comprehensive catalog of popular musicians and
            bands to consider for performances at corporate events, fundraising
            galas, or university events. A listing or profile on this website
            does not imply an agency affiliation or endorsement by the talent.
          </p>

          <p>
            All American Entertainment (AAE) exclusively represents the
            interests of talent buyers, and does not claim to be the agency or
            management for any artist or celebrity on this site. AAE Music is a
            talent booking agency for paid events only. We do not handle
            requests for donation of time or media requests for interviews, and
            cannot provide celebrity contact information.
          </p>

          <p>
            If you are the talent, and wish to request removal from this catalog
            or report an issue with your profile, please{" "}
            <a href="#" className="text-blue-600 hover:underline">
              click here
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
