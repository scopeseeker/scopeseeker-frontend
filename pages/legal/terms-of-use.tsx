import PageHeroSection from '@/component/page-hero-section/PageHeroSection';
import {
  Box,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';

export default function TermsOfUse() {
  return (
    <>
      <Head>
        <title>Terms & Conditions | Scope Seeker</title>
      </Head>
      <VStack w={'full'} minH={'100vh'} px={20} gap={10}>
        <PageHeroSection
          title="Terms & Conditions"
          subtitle="So you think you are at the right place? If yes, every collaboration has its own terms of use. Here's our terms and conditions."
          // headColor="brand.primary"
          paraColor="brand.semiblack"
          src="/assets/images/terms-of-use.webp"
          alt="terms-of-use"
        />

        <VStack w={'full'} alignItems={'flex-start'}>
          <Text
            color={'brand.semiblack'}
            fontWeight={'medium'}
            as={'h3'}
            fontSize={'xl'}
          >
            Terms of Use
          </Text>
          <VStack gap={3} alignItems={'flex-start'}>
            <Text as={'p'}>
              Welcome to Scope Seeker! Our website provides personalized job
              recommendations based on your skills and interests. By using any
              of our products, software, services, or websites (collectively
              referred to as the &quot;Services&quot;), you agree to comply with
              these Terms of Use.
            </Text>

            <Text as={'p'}>
              Please read these Terms carefully as they govern your access to
              and use of our Services. By using our Services, you agree to be
              bound by these Terms. If you do not agree to these Terms, please
              do not access or use our Services.
            </Text>

            <Text as={'p'}>
              In these Terms, &quot;you,&quot; &quot;User,&quot; or
              &quot;Visitor&quot; refers to anyone who uses our Services, and
              &quot;we,&quot; &quot;us,&quot; or &quot;our&quot; refers to Scope
              Seeker and its affiliates.
            </Text>
          </VStack>
        </VStack>

        <VStack w={'full'} alignItems={'flex-start'}>
          <Text
            color={'brand.semiblack'}
            fontWeight={'medium'}
            as={'h3'}
            fontSize={'xl'}
          >
            User Agreement
          </Text>
          <VStack gap={3} alignItems={'flex-start'}>
            <Text as={'p'}>
              Welcome to Scope Seeker! This User Agreement
              (&quot;Agreement&quot;) governs your access to and use of our
              website and services, available at https://www.scopeseeker.com
              (&quot;Site&quot;).
            </Text>

            <Text as={'p'}>
              By accessing or using the Site, you agree to be bound by the terms
              and conditions of this Agreement. If you do not agree to these
              terms, you may not access or use the Site.
            </Text>

            <Text as={'p'}>
              We reserve the right to modify or update this Agreement at any
              time without prior notice to you. You are responsible for checking
              this Agreement periodically for changes or updates. Your continued
              use of the Site following the posting of any changes to this
              Agreement constitutes acceptance of those changes.
            </Text>

            <Text as={'p'}>
              This Agreement applies to all users of the Site, including without
              limitation users who are browsers, job seekers, employers,
              recruiters, or contributors of content.
            </Text>
          </VStack>
        </VStack>

        <VStack w={'full'} alignItems={'flex-start'}>
          <Text
            color={'brand.semiblack'}
            fontWeight={'medium'}
            as={'h3'}
            fontSize={'xl'}
          >
            Accepting the Terms
          </Text>
          <VStack gap={3} alignItems={'flex-start'}>
            <Text as={'p'}>You can accept the Terms by:</Text>

            <Box>
              <OrderedList ml={8} spacing={3}>
                <ListItem>
                  Your use of our Services is subject to a legal agreement
                  between you and Scope Seeker.
                </ListItem>

                <ListItem>
                  By using any of our Services, you agree to be bound by our
                  Terms of Use.
                </ListItem>

                <ListItem>
                  If you do not accept these terms, you must not use our
                  Services.
                </ListItem>

                <ListItem>
                  We may update or change our Terms of Use at any time, and your
                  continued use of our Services indicates your acceptance of
                  these changes.
                </ListItem>

                <ListItem>
                  You can accept our Terms of Use by clicking to agree or by
                  using our Services.
                </ListItem>

                <ListItem>
                  We recommend that you save or print a copy of our Terms of Use
                  for your records.
                </ListItem>
              </OrderedList>
            </Box>
          </VStack>
        </VStack>

        <VStack w={'full'} alignItems={'flex-start'}>
          <Text
            color={'brand.semiblack'}
            fontWeight={'medium'}
            as={'h3'}
            fontSize={'xl'}
          >
            Modification
          </Text>
          <VStack gap={3} alignItems={'flex-start'}>
            <Box>
              <UnorderedList ml={8} spacing={3}>
                <ListItem>
                  scopeseekeer.com may modify, suspend, cancel, or discontinue
                  any or all channels, products, or services at any time without
                  prior notice.
                </ListItem>

                <ListItem>
                  Modifications or alterations may be made to any or all of the
                  content, products, and services on the site without prior
                  notice.
                </ListItem>

                <ListItem>
                  scopeseekeer.com will notify all users of any changes to the
                  terms and conditions.
                </ListItem>

                <ListItem>
                  By continuing to use the Services after the changes have been
                  made, you accept and agree to the updated Terms.
                </ListItem>
              </UnorderedList>
            </Box>
          </VStack>
        </VStack>

        <VStack w={'full'} alignItems={'flex-start'}>
          <Text
            color={'brand.semiblack'}
            fontWeight={'medium'}
            as={'h3'}
            fontSize={'xl'}
          >
            Registration, Access and Exchange of Information
          </Text>
          <VStack gap={3} alignItems={'flex-start'}>
            <Text as={'p'}>
              At Scope Seeker, we offer various services that may require
              registration by the visitor. To access these services, you must
              complete the registration process by providing accurate
              information as prompted by the registration form. You will also
              choose a password and username, which will be your email ID. It is
              your responsibility to maintain the confidentiality of your
              account and password. By registering, you agree to the following
              terms:
            </Text>

            <Box>
              <OrderedList ml={8} spacing={3}>
                <ListItem>
                  You will not share your account and password with any other
                  person.
                </ListItem>

                <ListItem>
                  You will not cache any part of the Site in proxy servers for
                  individuals who have not registered with Unstop.com as users
                  of the Site.
                </ListItem>

                <ListItem>
                  You will not make your account and password available to
                  multiple users on a network.
                </ListItem>
              </OrderedList>
            </Box>

            <Text as={'p'}>
              If we suspect that your account and password are being used or
              misused in any manner, we reserve the right to cancel access
              rights immediately without notice and block access to all users
              from that IP address. You are entirely responsible for any
              activities that occur under your account, and you agree to notify
              us immediately of any unauthorized use of your account or any
              other breach of security. We will not be liable for any loss that
              you may incur as a result of someone else using your password or
              account. However, you may be held liable for losses incurred by us
              or another party due to someone else using your account or
              password.
            </Text>
          </VStack>
        </VStack>

        <VStack w={'full'} alignItems={'flex-start'}>
          <Text
            color={'brand.semiblack'}
            fontWeight={'medium'}
            as={'h3'}
            fontSize={'xl'}
          >
            Your passwords and account security
          </Text>
          <VStack gap={3} alignItems={'flex-start'}>
            <Text as={'p'}>
              At Scope Seeker, we take account security seriously. When you
              register for our Services, you will be prompted to create a
              password and account. It is important that you keep this
              information confidential and do not share it with anyone else. You
              are solely responsible for any activity that occurs under your
              account.
            </Text>

            <Text as={'p'}>
              If you suspect that your account has been compromised or that
              someone has gained unauthorized access to your password, please
              notify us immediately at help@scopeseekeer.com. We will work with
              you to resolve the issue and secure your account.
            </Text>
          </VStack>
        </VStack>

        <VStack w={'full'} alignItems={'flex-start'}>
          <Text
            color={'brand.semiblack'}
            fontWeight={'medium'}
            as={'h3'}
            fontSize={'xl'}
          >
            Privacy Policy
          </Text>
          <VStack gap={3} alignItems={'flex-start'}>
            <Text as={'p'}>
              At Scope Seeker, we take the privacy of our users seriously. By
              using our services, you agree to our Privacy Policy, which can be
              found on our website. We recommend that you read our Privacy
              Policy carefully and contact us if you have any questions or
              concerns. By continuing to use our services, you acknowledge and
              agree to the terms of our Privacy Policy.
            </Text>
          </VStack>
        </VStack>

        <VStack w={'full'} alignItems={'flex-start'}>
          <Text
            color={'brand.semiblack'}
            fontWeight={'medium'}
            as={'h3'}
            fontSize={'xl'}
          >
            Advertising Material
          </Text>
          <VStack gap={3} alignItems={'flex-start'}>
            <Text as={'p'}>
              Some of the content on our website may include advertising
              information, promotion material, or other material submitted to
              Scope Seeker by third parties. It is the responsibility of the
              party providing the material to ensure that it complies with
              applicable laws. Any correspondence or business dealings with
              advertisers other than Scope Seeker found on the website are
              solely between you and the advertiser. We are not responsible for
              any claims, errors, omissions, inaccuracies in advertising
              material, or any losses or damages incurred as a result of such
              dealings or the presence of such advertisers on the website. We
              reserve the right to omit, suspend, or change the position of any
              advertising material submitted for insertion. Acceptance of
              advertisements on the website will be subject to these terms and
              conditions.
            </Text>
          </VStack>
        </VStack>

        <VStack w={'full'} alignItems={'flex-start'}>
          <Text
            color={'brand.semiblack'}
            fontWeight={'medium'}
            as={'h3'}
            fontSize={'xl'}
          >
            User Conduct and Rules
          </Text>
          <VStack gap={3} alignItems={'flex-start'}>
            <Text as={'p'}>
              By using the Scope Seeker website and its services, you agree to
              abide by the following rules of conduct. You agree that you will
              not:
            </Text>

            <Box>
              <OrderedList ml={8} spacing={3}>
                <ListItem>
                  Defame, abuse, harass, stalk, threaten or violate the legal
                  rights of others.
                </ListItem>

                <ListItem>
                  Post, upload, distribute, or disseminate any inappropriate,
                  profane, defamatory, infringing, obscene, indecent, or
                  unlawful content or information.
                </ListItem>

                <ListItem>
                  Upload files that contain software or other material protected
                  by intellectual property laws unless you own or control the
                  rights thereto or have received all necessary consents.
                </ListItem>

                <ListItem>
                  Upload or distribute files that contain viruses, corrupted
                  files, or any other similar software or programs that may
                  damage the operation of the Website or another&apos; s
                  computer.
                </ListItem>

                <ListItem>
                  Conduct or forward surveys, contests, pyramid schemes, or
                  chain letters.
                </ListItem>

                <ListItem>
                  Download any file posted by another user of a Service that you
                  know, or reasonably should know, cannot be legally distributed
                  in such manner.
                </ListItem>

                <ListItem>
                  Falsify or delete any author attributions, legal or other
                  proper notices or proprietary designations or labels of the
                  origin or source of software or other material contained in a
                  file that is uploaded.
                </ListItem>

                <ListItem>
                  Violate any code of conduct or other guidelines that may be
                  applicable for or to any particular Service.
                </ListItem>

                <ListItem>
                  Violate any applicable laws or regulations for the time being
                  in force in or outside India.
                </ListItem>

                <ListItem>
                  Violate any of the terms and conditions of this Agreement or
                  any other terms and conditions for the use of the Website
                  contained elsewhere herein.
                </ListItem>
              </OrderedList>
            </Box>
          </VStack>
        </VStack>

        <VStack w={'full'} alignItems={'flex-start'}>
          <Text
            color={'brand.semiblack'}
            fontWeight={'medium'}
            as={'h3'}
            fontSize={'xl'}
          >
            User Warranty and Representation
          </Text>
          <VStack gap={3} alignItems={'flex-start'}>
            <Text as={'p'}>
              By using our services, you warrant and represent that any content
              you submit or provide is either owned by you or you are authorized
              to use it. You guarantee that the content does not infringe upon
              the intellectual property rights, property rights, or any other
              rights of third parties. Furthermore, you warrant that you are not
              aware of any action, suit, proceeding, or investigation that has
              been instituted or threatened relating to any content, including
              trademarks, service marks, trade names, or copyrights used by you
              in connection with our services.
            </Text>
          </VStack>
        </VStack>

        <VStack w={'full'} alignItems={'flex-start'}>
          <Text
            color={'brand.semiblack'}
            fontWeight={'medium'}
            as={'h3'}
            fontSize={'xl'}
          >
            Termination and Access Restriction
          </Text>
          <VStack gap={3} alignItems={'flex-start'}>
            <Text as={'p'}>
              scopeseekeer.com has the right to terminate your access to the
              website and related services or any part of it at any time,
              without prior notice, at its sole discretion.
            </Text>
          </VStack>
        </VStack>

        <VStack w={'full'} alignItems={'flex-start'}>
          <Text
            color={'brand.semiblack'}
            fontWeight={'medium'}
            as={'h3'}
            fontSize={'xl'}
          >
            Disclaimer of Warranties/Limitation of Liability
          </Text>
          <VStack gap={3} alignItems={'flex-start'}>
            <Text as={'p'}>
              Scope Seeker has made every effort to ensure that the information
              provided on our website is accurate and of high quality. However,
              we do not warrant or make any representations regarding the
              quality, accuracy, or completeness of any data, information,
              product, or service provided on our site. We will not be liable
              for any direct, indirect, punitive, incidental, special, or
              consequential damages arising out of or in any way connected with
              the use or inability to use our services, unauthorized access to
              or alteration of user transmissions or data, or any other matter
              related to our services.
            </Text>

            <Text as={'p'}>
              We are not responsible for any delays or inability to use our
              website or related services, the provision of or failure to
              provide services, or for any information, software, products,
              services, and related graphics obtained through our website.
              Additionally, we will not be responsible for any non-availability
              of our website during periodic maintenance operations or any
              unplanned suspension of access to our website that may occur due
              to technical reasons or for any reason beyond our control.
            </Text>
            <Text as={'p'}>
              You understand and agree that any material and/or data downloaded
              or otherwise obtained through our website is done at your own
              discretion and risk. You will be solely responsible for any damage
              to your computer systems or loss of data that results from the
              download of such material and/or data.
            </Text>
          </VStack>
        </VStack>

        <VStack w={'full'} alignItems={'flex-start'}>
          <Text
            color={'brand.semiblack'}
            fontWeight={'medium'}
            as={'h3'}
            fontSize={'xl'}
          >
            Indemnification
          </Text>
          <VStack gap={3} alignItems={'flex-start'}>
            <Text as={'p'}>
              Scope Seeker provides a platform for job seekers to find
              personalized job opportunities based on their skills and
              interests. As a user of our website, you agree to indemnify,
              defend, and hold harmless Scope Seeker and its affiliates,
              officers, directors, employees, agents, and licensors from and
              against any and all claims, liabilities, damages, losses, costs,
              and expenses (including reasonable attorneys fees) arising from or
              in connection with:
            </Text>

            <Box>
              <OrderedList ml={8} spacing={3}>
                <ListItem>
                  Any breach or alleged breach by you of these Terms of Use or
                  any other agreement between you and Scope Seeker;
                </ListItem>

                <ListItem>
                  Your use of the website or the services provided by Scope
                  Seeker;
                </ListItem>

                <ListItem>
                  Your violation of any law or the rights of any third party;
                  and
                </ListItem>

                <ListItem>
                  Any activity related to your account, including but not
                  limited to negligent or wrongful conduct by you or any other
                  person accessing the website or services using your account.
                </ListItem>
              </OrderedList>
            </Box>

            <Text as={'p'}>
              Scope Seeker reserves the right to assume the exclusive defense
              and control of any matter otherwise subject to indemnification by
              you, in which event you will cooperate with Scope Seeker in
              asserting any available defenses.
            </Text>
          </VStack>
        </VStack>

        <VStack w={'full'} alignItems={'flex-start'}>
          <Text
            color={'brand.semiblack'}
            fontWeight={'medium'}
            as={'h3'}
            fontSize={'xl'}
          >
            Governing Law
          </Text>
          <VStack gap={3} alignItems={'flex-start'}>
            <Text as={'p'}>
              The terms and conditions of Scope Seeker shall be governed by and
              construed in accordance with the laws of India, without giving
              effect to its conflict of law provisions. Any dispute arising out
              of or related to these terms and conditions shall be subject to
              the exclusive jurisdiction of the courts located in Delhi, India.
            </Text>
          </VStack>
        </VStack>

        <VStack w={'full'} alignItems={'flex-start'}>
          <Text
            color={'brand.semiblack'}
            fontWeight={'medium'}
            as={'h3'}
            fontSize={'xl'}
          >
            Severability
          </Text>
          <VStack gap={3} alignItems={'flex-start'}>
            <Text as={'p'}>
              In the event that any provision of these Terms is deemed invalid
              or unenforceable, only the specific provision or part of the
              provision that is invalid or unenforceable shall be considered as
              such. The remainder of the provision and all other provisions of
              these Terms shall remain valid and enforceable to the fullest
              extent permitted by law.
            </Text>
          </VStack>
        </VStack>

        <VStack w={'full'} alignItems={'flex-start'}>
          <Text
            color={'brand.semiblack'}
            fontWeight={'medium'}
            as={'h3'}
            fontSize={'xl'}
          >
            Report Abuse
          </Text>
          <VStack gap={3} alignItems={'flex-start'}>
            <Text as={'p'}>
              As a user of the website, you are solely responsible for any
              content or material uploaded onto the platform. Unstop.com does
              not endorse, verify or guarantee the accuracy or quality of
              user-generated content on the website. Users may be held legally
              liable for any defamatory, copyrighted or trademarked content they
              post. If you become aware of any violation or abuse of these
              terms, please report it to reportabuse@scopeseekeer.com.
            </Text>
          </VStack>
        </VStack>

        <VStack w={'full'} alignItems={'flex-start'}>
          <Text
            color={'brand.semiblack'}
            fontWeight={'medium'}
            as={'h3'}
            fontSize={'xl'}
          >
            Forum Rules
          </Text>
          <VStack gap={3} alignItems={'flex-start'}>
            <Text as={'p'}>
              Welcome to the forum under Scope Seeker, where users can register
              for free to engage in discussions related to jobs, careers, and
              skill-building. We expect all users to comply with the following
              rules and policies:
            </Text>

            <Box>
              <OrderedList ml={8} spacing={3}>
                <ListItem>
                  Users must not post any messages that are obscene, vulgar,
                  sexually-oriented, hateful, threatening, or otherwise
                  violative of any laws.
                </ListItem>

                <ListItem>
                  The administrators and moderators of the forum will try their
                  best to keep objectionable messages off the platform, but they
                  cannot review every message. All messages express the views of
                  the author, and Scope Seeker will not be held responsible for
                  the content of any message.
                </ListItem>

                <ListItem>
                  Scope Seeker reserves the right to remove, edit, move or close
                  any thread for any reason.
                </ListItem>

                <ListItem>
                  Users agree to receive notices from Scope Seeker, including
                  those regarding changes to the Terms, by email, regular mail,
                  or postings on the Services.
                </ListItem>
              </OrderedList>

              <Text as={'p'}>
                We hope that all users will have meaningful and constructive
                conversations on the forum, helping each other build successful
                careers based on their skills and interests.
              </Text>
            </Box>
          </VStack>
        </VStack>

        <VStack w={'full'} alignItems={'flex-start'}>
          <Text
            color={'brand.semiblack'}
            fontWeight={'medium'}
            as={'h3'}
            fontSize={'xl'}
          >
            Ending your relationship with scopeseekeer.com
          </Text>
          <VStack gap={3} alignItems={'flex-start'}>
            <Text as={'p'}>
              The agreement between you and scopeseekeer.com will continue until
              it is terminated by either party. You may terminate this agreement
              by notifying scopeseekeer.com in writing and closing all of your
              accounts for the Services you use (if such an option is
              available). scopeseekeer.com may terminate this agreement with you
              if you breach any of the Terms or if it is required to do so by
              law. Additionally, if scopeseekeer.com determines that providing
              the Services to you is no longer commercially viable, it may also
              terminate the agreement.
            </Text>

            <Text as={'p'}>
              If the agreement is terminated, any legal rights, obligations, or
              liabilities that you and scopeseekeer.com have accrued or
              benefited from during the term of the agreement will not be
              affected by the termination. The provisions of Indemnification and
              Governing Law will continue to apply to such rights, obligations,
              and liabilities indefinitely.
            </Text>
          </VStack>
        </VStack>
      </VStack>
    </>
  );
}
