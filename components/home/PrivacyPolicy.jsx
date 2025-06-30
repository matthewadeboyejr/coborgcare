import { TbShieldCheck, TbLock, TbDeviceAnalytics } from "react-icons/tb";
import { PiFilesDuotone } from "react-icons/pi";
import Btn from "../Btn";

const PrivacyPolicy = () => {
  return (
    <section className="mb-24">
      <h2 className="text-4xl md:text-[100px] xl:text-[160px] font-semibold md:font-medium mb-3 w-full text-center leading-tight sm:leading-snug md:leading-normal">
        Privacy Policy
      </h2>

      <section className="flex flex-col-reverse lg:flex-row justify-between gap-8 lg:gap-12 bg-[#EDEEF1] rounded-3xl">
        {/* Left Section - Text Content */}
        <div className="w-full lg:w-[50%] flex items-center justify-center">
          <div className="space-y-4 sm:space-y-6 w-full px-4 sm:px-8 lg:px-0">
            <div className="flex md:block justify-center">
              <p className="bg-white flex justify-center text-[#0E31AC] text-sm py-2 px-4 rounded-full w-fit">
                Coburg Care Clinic
              </p>
            </div>
            <h2 className="text-3xl lg:text-4xl font-semibold text-center md:text-left leading-tight">
              Your Privacy Matters to Us
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#595959]">
              We are committed to protecting your personal health information in
              compliance with privacy laws and ethical healthcare standards.
            </p>

            <div className="space-y-3">
              <p className="bg-white/50 rounded-2xl p-3 flex items-center gap-3 text-sm sm:text-base md:text-lg text-[#595959]">
                <span className="text-[#0E31AC] text-3xl">
                  <TbShieldCheck />
                </span>
                <span>
                  <strong>Confidentiality:</strong> All personal and medical
                  information is kept private and secure.
                </span>
              </p>

              <p className="bg-white/50 rounded-2xl p-3 flex items-center gap-3 text-sm sm:text-base md:text-lg text-[#595959]">
                <span className="text-[#0E31AC] text-3xl">
                  <TbLock />
                </span>
                <span>
                  <strong>Secure Storage:</strong> Your records are protected
                  with secure systems and encryption.
                </span>
              </p>

              <p className="bg-white/50 rounded-2xl p-3 flex items-center gap-3 text-sm sm:text-base md:text-lg text-[#595959]">
                <span className="text-[#0E31AC] text-3xl">
                  <TbDeviceAnalytics />
                </span>
                <span>
                  <strong>Limited Access:</strong> Only authorized healthcare
                  professionals can access your information.
                </span>
              </p>

              <p className="bg-white/50 rounded-2xl p-3 flex items-center gap-3 text-sm sm:text-base md:text-lg text-[#595959]">
                <span className="text-[#0E31AC] text-3xl">
                  <PiFilesDuotone />
                </span>
                <span>
                  <strong>Transparency:</strong> You have the right to request
                  access to your medical records at any time.
                </span>
              </p>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-[#595959]">
              We do not share your information without your consent unless
              required by law for your safety or public health. Your trust is
              vital to us.
            </p>
          </div>
        </div>

        {/* Right Section - Icon Block or Optional Image */}
        <div className="w-full lg:w-[50%] flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-full overflow-hidden rounded-xl sm:rounded-2xl">
            <TbLock className="w-full h-full object-cover text-[#0E31AC] bg-white p-10 rounded-2xl" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default PrivacyPolicy;
