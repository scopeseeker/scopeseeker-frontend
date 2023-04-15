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

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Scope Seeker</title>
      </Head>
      <VStack w={'full'} minH={'100vh'} pt={8} px={20} gap={10}>
        <PageHeroSection
          title="Privacy Policy"
          subtitle="Every human or organisation has three levels of openness: Public,
        Personal and Private. We do believe in your rights to privacy."
          headColor="brand.primary"
          paraColor="brand.semiblack"
          src="/assets/images/privacy-policy.webp"
          alt="privacy-policy"
        />

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
              Welcome to Scope Seeker, where we prioritize your privacy. This
              Privacy Policy applies to our website, contents, and all of the
              services we offer. If you have any questions regarding our
              practices, please reach out to us at help@scopeseekeer.com.
            </Text>

            <Text as={'p'}>
              Here at FLIVE Consulting Private Limited, the parent company of
              Scope Seeker (also referred to as &quot;we&quot;, &quot;our&quot;,
              or &quot;us&quot;), we are committed to using your data
              transparently when you use our website https://scopeseekeer.com/
              (&quot;the Platform&quot;).
            </Text>

            <Text as={'p'}>
              Our Platform is designed to provide personalized job opportunities
              based on your skills and interests. We use gamified engagement,
              hiring, and opportunity listing and hosting technology to connect
              clients with potential job candidates. Our services include:
            </Text>

            <Box>
              <UnorderedList ml={8} spacing={3}>
                <ListItem>
                  Providing clients with a limited, non-exclusive,
                  non-transferable, non-sublicensable license to use the
                  Platform for listing, organizing, conducting, and
                  administering various opportunities like quizzes, hackathons,
                  simulations, or any other event type available on the
                  Platform. This includes administrative features to interact
                  with Participants.
                </ListItem>

                <ListItem>
                  Providing clients with a limited, non-exclusive,
                  non-transferable, non-sublicensable license to use the
                  Platform for hiring and conducting the recruitment process,
                  such as assessments, group discussions, interviews, and other
                  available services/products on the Platform. This includes
                  administrative features to interact with candidates.
                </ListItem>

                <ListItem>
                  Enabling clients to promote, market, and advertise their
                  opportunities by creating a promotional page for their
                  opportunity and monetizing it.
                </ListItem>

                <ListItem>
                  Providing Participants with a limited, non-exclusive,
                  non-transferable, non-sublicensable license to register,
                  interact, attend, and participate in opportunities conducted
                  by clients through the Platform.
                </ListItem>

                <ListItem>
                  Providing any other services ancillary to the above Services.
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
            Scope
          </Text>

          <VStack gap={3} alignItems={'flex-start'}>
            <Text as={'p'}>
              At Scope Seeker, our commitment to your privacy extends to all
              aspects of our business. This Privacy Policy applies to all of our
              contents, products, services, and websites, ensuring that your
              personal information is protected across our entire platform.
            </Text>

            <Text as={'p'}>
              Our goal at Scope Seeker is to provide you with personalized job
              opportunities based on your skills and interests, while
              maintaining the highest standards of privacy and security. If you
              have any questions or concerns about our Privacy Policy, please
              don&apos;t hesitate to contact us.
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
            Definations
          </Text>

          <VStack gap={3} alignItems={'flex-start'}>
            <Text as={'p'}>
              At Scope Seeker, we believe that clear definitions are crucial to
              ensuring that our users fully understand our Privacy Policy. The
              following definitions apply to this Privacy Policy, and any
              reference to the singular includes a reference to the plural and
              vice versa. Capitalized terms used but not defined below have been
              defined elsewhere in this Privacy Notice.
            </Text>

            <Text as={'p'}>
              &quot;Opportunities&quot; refer to public and private events
              organized by our clients to secure Participants/Candidates. Public
              opportunities are open to the general public, while private
              opportunities are only available to an identified group of
              Participants.
            </Text>

            <Text as={'p'}>
              &quot;Opportunity Content&quot; refers to any content related to
              an opportunity, including material, performance, presentation,
              reports, graphics, sounds, information, and data such as messages
              or files used or shared while hosting the opportunity in case of a
              client, and/or while participating in an opportunity in case of a
              Participant/Candidate.
            </Text>

            <Text as={'p'}>
              &quot;Clients&quot; refer to companies, institutes, businesses,
              organizations, and individuals who are registered on the Scope
              Seeker platform and use it to organize and host their
              opportunities.
            </Text>

            <Text as={'p'}>
              &quot;Participants/Candidates&quot; refer to individuals,
              including authorized representatives of companies, institutes,
              businesses, or organizations who are registered on the Scope
              Seeker platform and wish to participate in an opportunity.
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
            Information collection and use
          </Text>

          <VStack gap={3} alignItems={'flex-start'}>
            <Text as={'p'}>
              At Scope Seeker, we offer personalized job recommendations based
              on your skills and interests. To provide our full range of
              services, we may collect the following types of information:
            </Text>

            <Box>
              <OrderedList ml={8} spacing={3}>
                <ListItem>
                  Personal information such as your full name, profile picture,
                  email address, residential address (including post code, city,
                  country), mobile/telephone number, login details (including
                  username), title or designation, date of birth, gender,
                  current occupation, and the name of your organization (if
                  applicable).
                </ListItem>

                <ListItem>
                  Tracking information such as your IP address, device ID,
                  browser information, time zone setting, location, internet
                  service provider, and details of your platform usage and
                  browsing behavior for analytics purposes.
                </ListItem>

                <ListItem>
                  Your responses to assessments such as quizzes, hackathons,
                  document submissions, simulation games, treasure hunts, case
                  sim games, brand stories, and any such gamified assessments
                  for any job listing or opportunity.
                </ListItem>

                <ListItem>
                  Your marketing preferences, including any consents you have
                  given us
                </ListItem>

                <ListItem>
                  Information related to the browser or device you use to access
                  our platform.
                </ListItem>
              </OrderedList>
            </Box>

            <Text as={'p'}>
              Please note that providing some specific personally identifiable
              information may be compulsory/mandatory for the use of some
              specific services, and additional details may be required on top
              of the ones mentioned above.
            </Text>

            <Text as={'p'}>
              We may also receive information about you from third parties, such
              as social media providers (e.g. Github, LinkedIn, or Google) when
              you log in to Scope Seeker using your login details from such
              providers. Where you link your LinkedIn profile to your Scope
              Seeker account, we may receive information from your LinkedIn
              profile as well.
            </Text>

            <Text as={'p'}>
              Scope Seeker may present links in a format that enables us to keep
              track of whether these links have been followed. We use this
              information to improve the quality of our search technology,
              customized content, and advertising.
            </Text>

            <Text as={'p'}>
              This Privacy Policy applies to Scope Seeker&apos;s contents and
              services only. We do not exercise control over the sites displayed
              as search results or links from within our various services. These
              other sites may place their own cookies or other files on your
              computer, collect data, or solicit personal information from you.
            </Text>

            <Text as={'p'}>
              Please note that when you use Scope Seeker site services, you may
              make some of your personal information public. If you post
              personal information online that is accessible to the public, you
              may receive unsolicited messages from other parties in return, and
              Scope Seeker site will not be responsible for the use or misuse of
              such information.
            </Text>

            <Text as={'p'}>
              We use your email address and/or phone number to send you:
            </Text>
            <Box>
              <OrderedList ml={8} spacing={3}>
                <ListItem>
                  Password reminder and registration confirmation.
                </ListItem>
                <ListItem>Newsletters.</ListItem>
                <ListItem>
                  Changes in the service&apos;s policy or terms of use.
                </ListItem>
                <ListItem>
                  Event-based communications such as new event information,
                  invites, reminders, etc.
                </ListItem>
              </OrderedList>
            </Box>

            <Text as={'p'}>
              Please note that you shall have the option to unsubscribe from
              newsletters, promotional emails, new event information, invites,
              and reminders on our website.
            </Text>

            <Text as={'p'}>We use your personal information to:</Text>

            <Box>
              <OrderedList ml={8} spacing={3}>
                <ListItem>
                  Help us provide personalized features and tailor our site to
                  your interests.
                </ListItem>
                <ListItem>
                  Get in touch with you in the case of password retrieval and
                  policy changes.
                </ListItem>
                <ListItem>Provide the services requested by you.</ListItem>
                <ListItem>
                  Preserve social history as governed by existing law or policy.
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
            Information Sharing and Disclosure
          </Text>

          <VStack gap={3} alignItems={'flex-start'}>
            <Text as={'p'}>
              Scope Seeker site will not sell or rent your personally
              identifiable information to anyone. Scope Seeker will send
              personally identifiable information about you to other companies
              or people when:
            </Text>

            <Box>
              <UnorderedList ml={8} spacing={3}>
                <ListItem>
                  At Scope Seeker, we are committed to protecting your
                  personally identifiable information and ensuring your privacy.
                  We will never sell or rent your information to any third party
                  without your explicit consent.
                </ListItem>

                <ListItem>
                  We may need to share your information in certain circumstances
                  to provide you with the best service possible. This includes
                  sharing your information with our trusted partners who help us
                  respond to your comments or resolve any service issues you may
                  have. However, these partners have no independent right to use
                  your information except for the specific purpose of addressing
                  your concerns.
                </ListItem>

                <ListItem>
                  We may also share your information with the client for the job
                  opportunity in which you registered for participation. This is
                  necessary to help you find your dream job based on your skills
                  and interests.
                </ListItem>

                <ListItem>
                  In addition, we may be required to share your information in
                  response to a request from any Indian or foreign government,
                  security, defense, revenue, regulatory, or other authority,
                  agency, or officer. We may also be required to respond to
                  subpoenas, court orders, or legal processes.
                </ListItem>

                <ListItem>
                  Finally, if we find that your actions on our website violate
                  our terms of service or any of our usage guidelines for
                  specific products or services, we reserve the right to take
                  appropriate action, which may include sharing your information
                  with law enforcement authorities.
                </ListItem>

                <ListItem>
                  At Scope Seeker, we value your trust and take your privacy
                  seriously. Rest assured that we will only share your
                  information when necessary and with your explicit consent.
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
            Cookies
          </Text>

          <VStack gap={3} alignItems={'flex-start'}>
            <Text as={'p'}>
              At Scope Seeker, we understand the importance of providing a
              customized and personalized experience to our users. In order to
              achieve this, we use cookies on our platform. Cookies are small
              files that are stored on your hard drive which allow us to provide
              customized services and information targeted to your interests.
            </Text>

            <Text as={'p'}>
              Our platform uses session cookies to ensure that you have a
              seamless experience while using our site. These cookies contain a
              unique number, known as your session ID, which allows our server
              to recognize your computer and remember what you have done on the
              platform. This ensures that you only need to log in once if you
              are navigating secure areas of the platform and you can see the
              information that you have requested.
            </Text>

            <Text as={'p'}>
              We understand that you may prefer not to accept cookies, and you
              can choose to accept or decline cookies by modifying your browser
              settings. However, please note that this may prevent you from
              taking full advantage of our platform. We also use various
              third-party cookies for usage, behavioral, analytics, and
              preferences data.
            </Text>

            <Text as={'p'}>
              At Scope Seeker, we take your privacy very seriously. All
              information collected and accessed through the use of cookies will
              be maintained in accordance with our privacy policy. Please note
              that other companies that present advertisements on some of our
              pages may also set and access their cookies on your computer.
              However, their use of cookies is subject to their own privacy
              policies, not ours.
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
            Information shared by Participant/Candidate directly with the client
          </Text>

          <VStack gap={3} alignItems={'flex-start'}>
            <Text as={'p'}>
              At Scope Seeker, we take your privacy very seriously. We want to
              ensure that you are aware of how your information is shared during
              an Event/Opportunity/Job organised by our clients. Please note
              that any additional information shared by Participants with
              clients during such events is provided directly by the Participant
              to the client. As such, we are in no way responsible or liable for
              the use, misuse, or treatment of such information. Our Privacy
              Notice does not cover any information shared by the
              Participant/Candidate with the client.
            </Text>

            <Text as={'p'}>
              We may transfer your personal data to India during the course of
              our Services. However, depending on the location of the organizer,
              your data may also be transferred to other countries. Rest assured
              that all information collected and accessed through our platform
              and cookies will be maintained in accordance with our Privacy
              Policy. We do use data collection devices such as
              &quot;cookies&quot; to assist us in providing customized services
              and to help us provide information that is targeted to your
              interests. We also use various third-party cookies for usage,
              behavioural, analytics, and preferences data.
            </Text>

            <Text as={'p'}>
              We respect your privacy and will not sell or rent your personally
              identifiable information to anyone. However, we may need to share
              your information with certain service partners in order to respond
              to your comments or resolve service issues. Unless we tell you
              differently, these partners have no independent right to use this
              information except to respond to your comments or to resolve the
              service issues.
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
            Links
          </Text>

          <VStack gap={3} alignItems={'flex-start'}>
            <Text as={'p'}>
              At Scope Seeker, we may provide links to external websites on our
              platform to provide you with additional information or resources
              related to your job search. These links may be presented in a
              format that enables us to track whether they have been followed.
              We use this information to improve the quality of our services and
              to provide you with more customized content and advertising.
            </Text>

            <Text as={'p'}>
              Please note that these external websites have their own privacy
              policies, which may differ from ours. We are not responsible for
              the privacy practices of these external websites and encourage you
              to review their privacy policies before providing any personal
              information.
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
            Security
          </Text>

          <VStack gap={3} alignItems={'flex-start'}>
            <Text as={'p'}>
              Your Scope Seeker account information is password-protected for
              your privacy and security.
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
            Changes to this Privacy Policy
          </Text>

          <VStack gap={3} alignItems={'flex-start'}>
            <Text as={'p'}>
              At Scope Seeker, we take your privacy seriously and are committed
              to being transparent about any changes to our Privacy Policy. We
              may update this policy from time to time, but we will not diminish
              your rights under this policy without your explicit consent.
            </Text>

            <Text as={'p'}>
              We will notify you of any significant changes by posting a
              prominent announcement on our website, so we encourage you to
              check back periodically to stay informed of any updates.
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
            Data integrity
          </Text>

          <VStack gap={3} alignItems={'flex-start'}>
            <Text as={'p'}>
              We take reasonable steps to ensure that the personal information
              we process is accurate, complete, and up-to-date. However, we also
              rely on our users to update or correct their personal information
              whenever necessary. If you believe that any of the personal
              information we have collected from you is inaccurate, incomplete,
              or out-of-date, please contact us so we can promptly update or
              correct it.
            </Text>

            <Text as={'p'}>
              We also have in place appropriate technical and organizational
              measures to safeguard your personal information against
              unauthorized access, accidental loss, destruction, or damage. We
              continuously monitor and review our security policies and
              procedures to ensure that your personal information is always
              protected.
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
            My Rights
          </Text>

          <VStack gap={3} alignItems={'flex-start'}>
            <Text as={'p'}>
              As a user of our Scope Seeker platform, you have certain rights
              regarding your personal data. You have the right to request a copy
              of your personal data, and to request corrections, deletions, or
              restrictions on the processing of your personal data.
              Additionally, you may request that we provide the personal data
              you have provided to us in a structured, machine-readable format.
            </Text>

            <Text as={'p'}>
              Under certain circumstances, you may object to the processing of
              your personal data, such as when the data is being used for direct
              marketing purposes. However, please note that these rights may be
              limited in certain situations, such as when fulfilling your
              request would infringe upon the rights of a third party, or if we
              are required by law to retain certain information. If we rely on
              any relevant exemptions when responding to your request, we will
              inform you accordingly.
            </Text>

            <Text as={'p'}>
              When you register on our platform, you will need to provide us
              with certain mandatory information, as indicated in the form. In
              addition, when purchasing a ticket or subscription plan, you will
              need to provide payment details. If you do not provide this
              information, we may not be able to let you create an account,
              attend events, or provide you with the services you requested. Any
              other information you provide is optional.
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
            Data Retention
          </Text>

          <VStack gap={3} alignItems={'flex-start'}>
            <Text as={'p'}>
              At Scope Seeker, we strive to ensure that we only retain your
              personal data for as long as necessary to provide you with our
              services or as required by law. Generally, we retain your personal
              data as long as your account is open or as needed to provide you
              with our services. However, if your account has been inactive for
              five years or if you request to close your account, we will retain
              your data for a period of 5 (five) years.
            </Text>

            <Text as={'p'}>
              In cases where we process your personal data for marketing
              purposes or with your consent, we will continue to process your
              data until you ask us to stop and for a short period thereafter to
              implement your request. We will also maintain a record of your
              request not to receive direct marketing or for us to process your
              data, so we can respect your wishes in the future.
            </Text>

            <Text as={'p'}>
              For personal data that we process in connection with performing a
              contract or for a competition, we will retain the data for six (6)
              years from your last interaction with us.
            </Text>

            <Text as={'p'}>
              Rest assured that we will review our data retention practices
              regularly to ensure that we only retain personal data that is
              necessary for the purpose for which it was collected.
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
            Account Deletion
          </Text>

          <VStack gap={3} alignItems={'flex-start'}>
            <Text as={'p'}>
              If you wish to delete your account you can email us at
              support@scopeseekeer.com from your registered email
            </Text>
          </VStack>
        </VStack>
      </VStack>
    </>
  );
}
