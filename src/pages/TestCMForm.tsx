import { useEffect } from "react";

export default function TestCMForm() {
  useEffect(() => {
    // Load the Campaign Monitor script
    const script = document.createElement('script');
    script.src = 'https://js.createsend1.com/javascript/copypastesubscribeformlogic.js';
    script.type = 'text/javascript';
    document.head.appendChild(script);

    // Load WebFont script
    const webfontScript = document.createElement('script');
    webfontScript.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
    document.head.appendChild(webfontScript);

    webfontScript.onload = () => {
      // @ts-ignore
      if (window.WebFont) {
        // @ts-ignore
        window.WebFont.load({
          google: { families: ['Lato:900:latin'] }
        });
      }
    };

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(webfontScript);
    };
  }, []);

  return (
    <div>
      <nav className="p-4 bg-gray-100">
        <a href="/" className="text-blue-600 hover:underline mr-4">← Back to Home</a>
        <a href="/diaper-bag-giveaway" className="text-blue-600 hover:underline">Giveaway Page</a>
      </nav>
      
      <div dangerouslySetInnerHTML={{
        __html: `
          <div class="l-form-default" style="min-height: calc(100vh - 15rem); padding-bottom: 10rem; padding-top: 5rem; background: #EEEEEE;">
            <div>
              <div class="l-center-container">
                <div class="sc-ckVGcZ jslhpj">
                  <h1 class="sc-jKJlTe jmtkzV">Campaign Monitor Test Form</h1>
                </div>
                <div>
                  <div class="sc-bdVaJa iIDDUy">
                    <div>
                      <p class="sc-Rmtcm hRybD"></p>
                      <div spacing="base" class="sc-iAyFgw kFBOaz"></div>
                    </div>
                    <form class="js-cm-form" id="subForm" action="https://www.createsend.com/t/subscribeerror?description=" method="post" data-id="A61C50BEC994754B1D79C5819EC1255CFA28D1654E6F0CD6DD89EBC6584511957D64FA779A3911D0CBD6793EBFE3D860B8AC108077707263B7C565A5740BE030">
                      <div class="sc-cSHVUG jZSLFe">
                        <div class="sc-cSHVUG kXIIFK">
                          <div>
                            <label for="fielddtktuiu" class="sc-gzVnrw ipNSps">First Name </label>
                            <input id="fielddtktuiu" maxLength="200" name="cm-f-dtktuiu" class="sc-gZMcBi dshyOS" />
                          </div>
                        </div>
                        <div class="sc-cSHVUG kXIIFK">
                          <div>
                            <label for="fielddtktudl" class="sc-gzVnrw bIWTrn">Last Name </label>
                            <input id="fielddtktudl" maxLength="200" name="cm-f-dtktudl" class="sc-gZMcBi dshyOS" />
                          </div>
                        </div>
                        <div class="sc-cSHVUG kXIIFK">
                          <div>
                            <label for="fieldEmail" class="sc-gzVnrw cKFCFj">Email <span class="sc-dnqmqq iFTUZ">*</span></label>
                            <input autoComplete="Email" id="fieldEmail" maxLength="200" name="cm-ttdljdt-ttdljdt" placeholder="Your email" required type="email" class="js-cm-email-input qa-input-email sc-gZMcBi dshyOS" />
                          </div>
                        </div>
                        <div class="sc-cSHVUG kXIIFK">
                          <div>
                            <label class="sc-gzVnrw hSefwP">I am... </label>
                            <div class="sc-gqjmRU bjYfes">
                              <select id="fielddtktudr" name="cm-fo-dtktudr" value class="sc-VigVT jMAAaa">
                                <option disabled selected value>Select...</option>
                                <option value="7256125">Pregnant</option>
                                <option value="7256126">I gave birth</option>
                                <option value="7256127">Grandparent</option>
                              </select>
                              <svg aria-hidden="true" class="sc-jTzLTM liGfFV" fill="currentColor" viewBox="2 0 10 14">
                                <path d="M4.95 4.07L2.12 1.244c-.39-.39-1.023-.39-1.413 0-.39.39-.39 1.024 0 1.414L3.95 5.9c.187.187.44.292.707.292h.585c.266 0 .52-.105.708-.292l3.242-3.243c.39-.39.39-1.024 0-1.414-.39-.39-1.024-.39-1.414 0L4.95 4.07z" fill-rule="evenodd" transform="translate(0 4)"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="sc-cSHVUG jZSLFe"></div>
                      <button type="submit" class="js-cm-submit-button sc-brqgnP dwYSlG">Subscribe</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <style>
            .iIDDUy { background: rgb(255, 255, 255); border-radius: 0.3125rem; max-width: 35.25rem; margin-left: auto; margin-right: auto; padding: 2.5rem 2.75rem; position: relative; }
            .hYNtOw { font-family: Helvetica, Arial, sans-serif; font-weight: 400; color: rgb(93, 93, 101); display: block; font-size: 0.875rem; }
            .cKFCFj { font-family: Helvetica, Arial, sans-serif; font-weight: 400; color: rgb(93, 93, 101); display: block; font-size: 0.875rem; }
            .ipNSps { font-family: Helvetica, Arial, sans-serif; font-weight: 400; color: rgb(93, 93, 101); display: block; font-size: 0.875rem; }
            .bIWTrn { font-family: Helvetica, Arial, sans-serif; font-weight: 400; color: rgb(93, 93, 101); display: block; font-size: 0.875rem; }
            .hSefwP { font-family: Helvetica, Arial, sans-serif; font-weight: 400; color: rgb(93, 93, 101); display: block; font-size: 0.875rem; }
            .iFTUZ { color: rgb(221, 54, 42); }
            .dshyOS { appearance: none; background-color: rgb(255, 255, 255); border: 0px; border-radius: 0.1875rem; box-sizing: border-box; box-shadow: rgba(142, 154, 173, 0.1) 0px 2px 0px 0px inset, rgb(210, 215, 223) 0px 0px 0px 1px inset, rgb(255, 255, 255) 0px 1px 0px 0px; color: rgb(67, 77, 93); font-size: 0.875rem; line-height: 1.5; min-height: 2.8125rem; outline: 0px; padding: 0.75rem 1rem; transition: box-shadow 0.2s ease 0s; width: 100%; }
            .dshyOS:focus { box-shadow: transparent 0px 0px 0px 0px inset, rgb(80, 156, 246) 0px 0px 0px 1px inset, rgba(80, 156, 246, 0.25) 0px 0px 0px 2px; }
            .bjYfes { background-color: rgb(250, 250, 251); border-radius: 0.1875rem; box-shadow: rgb(255, 255, 255) 0px 2px 0px 0px inset, rgb(210, 215, 223) 0px 0px 0px 1px, rgba(142, 154, 173, 0.1) 0px 3px 0px 0px; display: block; position: relative; }
            .jMAAaa { appearance: none; background: none; border: 0px; box-sizing: border-box; color: rgb(67, 77, 93); cursor: pointer; display: block; font-size: 0.875rem; min-height: 2.8125rem; outline: 0px; padding: 0.75rem 2.5rem 0.75rem 1rem; text-align: left; transition: box-shadow 0.2s ease 0s; width: 100%; }
            .jMAAaa:focus { box-shadow: transparent 0px 0px 0px 0px inset, rgb(80, 156, 246) 0px 0px 0px 1px inset, rgba(80, 156, 246, 0.25) 0px 0px 0px 2px; }
            .liGfFV { color: rgb(142, 154, 173); height: 1rem; line-height: 0; max-height: 100%; max-width: 100%; pointer-events: none; position: absolute; right: 1rem; top: 50%; transform: translateY(-50%); width: 1rem; }
            .jZSLFe { margin-bottom: 1.5rem; }
            .kXIIFK { margin-bottom: 1rem; }
            .jslhpj { margin-left: auto; margin-right: auto; max-width: 29.125rem; padding-bottom: 3.125rem; }
            .jmtkzV { font-size: 3rem; text-align: center; letter-spacing: -1px; line-height: 1.17; -webkit-font-smoothing: antialiased; font-family: Lato, Arial, sans-serif; font-weight: 900; color: rgb(0, 0, 0); }
            .kFBOaz { border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(210, 215, 223); margin-bottom: 1.5rem; padding-top: 1.5rem; }
            .dwYSlG { background-color: rgb(123, 177, 61); border: medium; border-radius: 3px; color: rgb(255, 255, 255); display: inline-block; font-family: Helvetica, Arial, sans-serif; font-weight: 400; font-size: 1rem; line-height: 1; outline: 0px; padding: 0.75rem 1.5rem; text-decoration-style: solid; text-decoration-color: currentcolor; text-decoration: none; transition: background-color 0.1s ease-in 0s, box-shadow 0.1s ease-in 0s; }
            .dwYSlG:hover { cursor: pointer; }
            .hRybD { white-space: pre-wrap; font-size: 16px; font-family: Helvetica, Arial, sans-serif; font-weight: 400; color: rgb(67, 77, 93); }
          </style>
        `
      }} />
    </div>
  );
}