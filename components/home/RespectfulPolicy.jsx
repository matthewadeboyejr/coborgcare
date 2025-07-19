import { PiHandshakeLight } from "react-icons/pi";
import { MdOutlineNoCrash } from "react-icons/md";
import { TbShieldCheck } from "react-icons/tb";
import { HiOutlineSpeakerphone } from "react-icons/hi";

const RespectfulPolicy = () => {
  return (
    <section className="mb-24">
      <h2 className="text-4xl md:text-[100px] xl:text-[160px] font-semibold md:font-medium mb-3 w-full text-center leading-tight sm:leading-snug md:leading-normal">
        Respect Policy
      </h2>

      <section className="flex flex-col-reverse lg:flex-row justify-between gap-8 lg:gap-12 bg-[#EDEEF1] rounded-3xl">
        {/* Left Section - Image Placeholder if needed */}
        <div className="w-full lg:w-[50%] flex items-center justify-center">
          <div className="space-y-4 sm:space-y-6 w-full px-4 sm:px-8 lg:px-0">
            <div className="flex md:block justify-center">
              <p className="bg-white flex justify-center text-[#0E31AC] text-sm py-2 px-4 rounded-full w-fit">
                Cobourg Care Clinic
              </p>
            </div>
            <h2 className="text-3xl lg:text-4xl font-semibold text-center md:text-left leading-tight ">
              A Safe & Respectful Environment for Everyone
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#595959]">
              At Cobourg, we are committed to providing high-quality care in a
              safe and respectful environment for all our patients and staff.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-[#595959]">
              We understand that being unwell or caring for others can be
              stressful. However, we do not tolerate any form of abuse towards
              our team, including:
            </p>

            <div className="space-y-3">
              <p className="bg-white/50 rounded-2xl p-3 flex items-center gap-3 text-sm sm:text-base md:text-lg text-[#595959]">
                <span className="text-[#0E31AC] text-3xl">
                  <HiOutlineSpeakerphone />
                </span>
                <span>
                  <strong>Verbal abuse</strong>, shouting, or swearing (in
                  person or over the phone)
                </span>
              </p>
              <p className="bg-white/50 rounded-2xl p-3 flex items-center gap-3 text-sm sm:text-base md:text-lg text-[#595959]">
                <span className="text-[#0E31AC] text-3xl">
                  <MdOutlineNoCrash />
                </span>
                <span>
                  <strong>Threatening or aggressive behaviour</strong> towards
                  staff or patients
                </span>
              </p>
              <p className="bg-white/50 rounded-2xl p-3 flex items-center gap-3 text-sm sm:text-base md:text-lg text-[#595959]">
                <span className="text-[#0E31AC] text-3xl">
                  <TbShieldCheck />
                </span>
                <span>
                  <strong>Physical abuse</strong> of any form will not be
                  tolerated
                </span>
              </p>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-[#595959]">
              Abuse against healthcare staff can impact their wellbeing and your
              care. Anyone who engages in abusive or violent behaviour may be
              asked to leave the clinic and could face removal from our patient
              list.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-[#595959]">
              We appreciate your understanding and cooperation in helping us
              maintain a respectful, safe environment for everyone.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-[#595959]">
              Thank you for your support.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-[#595959]">
              Signed <br />
              Cobourg Management
            </p>
          </div>
        </div>

        {/* Right Section - Optional Image or Icon */}
        <div className="w-full lg:w-[50%] flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-full overflow-hidden rounded-xl sm:rounded-2xl">
            <PiHandshakeLight className="w-full h-full object-cover text-[#0E31AC] bg-white p-10 rounded-2xl" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default RespectfulPolicy;
