

import Card from "@mui/joy/Card"
const Dashboard=()=>{
    return(
        <Card> 
      <div className='container-fluid'>
        <h1 className="fw-600">
          Hello, <br /> I&apos;m{" "}
          <span className="greenText">Sateesh Polina</span>.<br />
          I&apos;m a <span className="greenText">Frontend</span> Web Developer.
        </h1>
        <div className="d-flex flex-column gap-4 mt-4">
          {/* <div>
            {techStack.map((tech) => (
              <Link href={tech.href} key={tech.id} target="_blank">
                <Image
                  src={"/assets" + tech.src}
                  alt={tech.name}
                  width={80}
                  height={80}
                />
              </Link>
            ))}
          </div> */}
          {/* <Button
            label="CHECK OUT MY CODE ON GITHUB"
            href="https://github.com/AshutoshVJTI"
            targetBlank
          /> */}
          
        </div>
      </div>
    </Card>
    )
}


export default Dashboard